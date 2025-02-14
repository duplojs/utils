import { type ExpectType } from "./expectType";
import { createInterpolation, type CreateInterpolationContract } from "./interpolation";

describe("interpolation", () => {
	it("simple replace", () => {
		const interpolation = createInterpolation("query-{id}");

		type check1 = ExpectType<
			CreateInterpolationContract<typeof interpolation>,
			`query-${string}`,
			"strict"
		>;

		const result = interpolation({
			id: "aa",
		});

		type check = ExpectType<typeof result, "query-aa", "strict">;

		expect(result).toBe("query-aa");
	});

	it("multi replace", () => {
		const interpolation = createInterpolation("query-{id}-{test}");

		type check1 = ExpectType<
			CreateInterpolationContract<typeof interpolation>,
			`query-${string}-${string}`,
			"strict"
		>;

		const result = interpolation({
			id: "aa",
			test: "vol",
		});

		type check = ExpectType<typeof result, "query-aa-vol", "strict">;

		expect(result).toBe("query-aa-vol");
	});

	it("no interpolation", () => {
		const interpolation = createInterpolation("query");

		type check1 = ExpectType<
			CreateInterpolationContract<typeof interpolation>,
			"query",
			"strict"
		>;

		const result = interpolation();

		type check = ExpectType<typeof result, "query", "strict">;

		expect(result).toBe("query");
	});

	it("complex interpolation", () => {
		const interpolation = createInterpolation("{id1}{id2}{id3}{id4}");

		type check1 = ExpectType<
			CreateInterpolationContract<typeof interpolation>,
			string,
			"strict"
		>;

		const result = interpolation({
			id1: "1",
			id2: "2",
			id3: "3",
			id4: "4",
		});

		type check = ExpectType<typeof result, "1234", "strict">;

		expect(result).toBe("1234");
	});

	it("replace multi", () => {
		const interpolation = createInterpolation("{id}{id}");

		type check1 = ExpectType<
			CreateInterpolationContract<typeof interpolation>,
			string,
			"strict"
		>;

		const result = interpolation({
			id: "1",
		});

		type check = ExpectType<typeof result, "11", "strict">;

		expect(result).toBe("11");
	});
});
