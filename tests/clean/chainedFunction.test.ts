import { DClean, DEither, type ExpectType } from "@scripts";

describe("chainedFunction", () => {
	it("executes links in declaration order and returns the chain end value", () => {
		const useCase = DClean.chainedFunction(
			["parseTitle", (input: string) => input.trim()],
			["createSlug", (input: string) => input.toLowerCase().replaceAll(" ", "-")],
			["persistSlug", (input: string) => input.length],
		);

		const calls: string[] = [];

		const result = useCase(function *(link1) {
			const [title, link2] = yield *link1(({ parseTitle }) => {
				calls.push("parseTitle");
				return parseTitle("  Hello World  ");
			});

			const [slug, link3] = yield *link2(({ createSlug }) => {
				calls.push("createSlug");
				return createSlug(title);
			});

			const [slugLength, chainEnd] = yield *link3(({ persistSlug }) => {
				calls.push("persistSlug");
				return persistSlug(slug);
			});

			return chainEnd(slugLength);
		});

		expect(calls).toStrictEqual(["parseTitle", "createSlug", "persistSlug"]);
		expect(result).toBe(11);

		type Check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("short-circuits on a synchronous left and does not execute following links", () => {
		const error = DEither.error("invalid-title");
		const useCase = DClean.chainedFunction(
			["parseTitle", () => error],
			["persistTitle", (input: string) => input.length],
		);

		const persistTitleSpy = vi.fn((input: string) => input.length);

		const result = useCase(function *(link1) {
			const [title, link2] = yield *link1(({ parseTitle }) => parseTitle());
			const [length, chainEnd] = yield *link2(() => persistTitleSpy(title));

			return chainEnd(length);
		});

		expect(result).toBe(error);
		expect(persistTitleSpy).not.toHaveBeenCalled();

		type Check = ExpectType<
			typeof result,
			DEither.Error<"invalid-title"> | number,
			"strict"
		>;
	});

	it("returns the left produced by a chained function call after previous links succeeded", () => {
		const error = DEither.error({ reason: "persist-failed" });
		const useCase = DClean.chainedFunction(
			["parseTitle", (input: string) => input.trim()],
			["persistTitle", (input: string) => input.length > 0 ? error : input.length],
		);

		const result = useCase(function *(link1) {
			const [title, link2] = yield *link1(({ parseTitle }) => parseTitle("hello"));
			const [length, chainEnd] = yield *link2(({ persistTitle }) => persistTitle(title));

			return chainEnd(length);
		});

		expect(result).toBe(error);

		type Check = ExpectType<
			typeof result,
			DEither.Error<{ readonly reason: "persist-failed" }> | number,
			"strict"
		>;
	});

	it("returns the left produced directly by the implementation", () => {
		const error = DEither.error({ reason: "implementation-failed" });
		const useCase = DClean.chainedFunction(
			["parseTitle", (input: string) => input.trim()],
			["persistTitle", (input: string) => input.length],
		);

		const result = useCase(function *(link1) {
			const [title, link2] = yield *link1(({ parseTitle }) => parseTitle("hello"));
			const [length, chainEnd] = yield *link2(({ persistTitle }) => persistTitle(title));

			return title.length > 0
				? error
				: chainEnd(length);
		});

		expect(result).toBe(error);

		type Check = ExpectType<
			typeof result,
			DEither.Error<{ readonly reason: "implementation-failed" }> | number,
			"strict"
		>;
	});

	it("breakIfLeft returns a synchronous value without its left branch", () => {
		const error = DEither.error("manual-left");
		const value = "hello" as string | typeof error;
		const useCase = DClean.chainedFunction(
			["parseTitle", (input: string) => input.trim()],
			["persistTitle", (input: string) => input.length],
		);

		const result = useCase(function *(link1, { breakIfLeft }) {
			const titleInput = yield *breakIfLeft(value);
			const [title, link2] = yield *link1(({ parseTitle }) => parseTitle(titleInput));
			const [length, chainEnd] = yield *link2(({ persistTitle }) => persistTitle(title));

			return chainEnd(length);
		});

		expect(result).toBe(5);

		type Check = ExpectType<
			typeof result,
			DEither.Error<"manual-left"> | number,
			"strict"
		>;
	});

	it("breakIfLeft short-circuits on a synchronous left", () => {
		const error = DEither.error("manual-left");
		const value = error as string | typeof error;
		const useCase = DClean.chainedFunction(
			["parseTitle", (input: string) => input.trim()],
			["persistTitle", (input: string) => input.length],
		);
		const persistTitleSpy = vi.fn((input: string) => input.length);

		const result = useCase(function *(link1, { breakIfLeft }) {
			const titleInput = yield *breakIfLeft(value);
			type check = ExpectType<
				typeof titleInput,
				string,
				"strict"
			>;
			const [title, link2] = yield *link1(({ parseTitle }) => parseTitle(titleInput));
			const [length, chainEnd] = yield *link2(() => persistTitleSpy(title));

			return chainEnd(length);
		});

		expect(result).toBe(error);
		expect(persistTitleSpy).not.toHaveBeenCalled();

		type Check = ExpectType<
			typeof result,
			DEither.Error<"manual-left"> | number,
			"strict"
		>;
	});

	it("awaits asynchronous links and returns asynchronous chain end values", async() => {
		const useCase = DClean.chainedFunction(
			["loadCount", async(input: number) => Promise.resolve(input + 1)],
			["saveCount", async(input: number) => Promise.resolve(input * 2)],
		);

		const result = useCase(async function *(link1) {
			const [loadedCount, link2] = yield *link1(({ loadCount }) => loadCount(3));
			const [savedCount, chainEnd] = yield *link2(({ saveCount }) => saveCount(loadedCount));

			await Promise.resolve();

			return chainEnd(savedCount);
		});

		await expect(result).resolves.toBe(8);

		type Check = ExpectType<
			typeof result,
			Promise<number>,
			"strict"
		>;
	});

	it("short-circuits on an asynchronous left before running the next link", async() => {
		const error = DEither.error({ code: "load-failed" });
		const useCase = DClean.chainedFunction(
			["loadCount", async() => Promise.resolve(error)],
			["saveCount", async(input: number) => Promise.resolve(input * 2)],
		);

		const saveCountSpy = vi.fn(async(input: number) => Promise.resolve(input * 2));

		const result = useCase(async function *(link1) {
			const [loadedCount, link2] = yield *link1(({ loadCount }) => loadCount());
			const [savedCount, chainEnd] = yield *link2(() => saveCountSpy(loadedCount));

			await Promise.resolve();

			return chainEnd(savedCount);
		});

		await expect(result).resolves.toBe(error);
		expect(saveCountSpy).not.toHaveBeenCalled();

		type Check = ExpectType<
			typeof result,
			Promise<DEither.Error<{ readonly code: "load-failed" }> | number>,
			"strict"
		>;
	});

	it("rejects callbacks that can finish without returning a chain end", () => {
		const useCase = DClean.chainedFunction(
			["readValue", () => 1],
			["saveValue", (input: number) => input],
		);

		useCase(
			//@ts-expect-error chainedFunction callbacks must return chainEnd on the success path
			function *(link1) {
				const [value, link2] = yield *link1(({ readValue }) => readValue());
				yield *link2(({ saveValue }) => saveValue(value));
			},
		);
	});
});
