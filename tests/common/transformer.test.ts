import * as DCommon from "@scripts";

describe("transformer", () => {
	it("applies the target method when present", () => {
		const input = {
			value: 1,
			toNative() {
				return { done: true as const };
			},
		};

		const result = DCommon.transformer(input, "toNative");

		expect(result).toEqual({ done: true });

		type check = DCommon.ExpectType<
			typeof result,
			{ done: true },
			"strict"
		>;
	});

	it("recursively transforms plain objects and arrays", () => {
		const input = {
			first: {
				toNative() {
					return 1 as const;
				},
			},
			second: [
				{
					toNative() {
						return "x" as const;
					},
				},
				"keep",
			],
			thirty: {
				forty: {
					toNative() {
						return { ok: true as const };
					},
				},
			},
		};

		const result = DCommon.transformer(input, "toNative");

		expect(result).toEqual({
			first: 1,
			second: ["x", "keep"],
			thirty: { forty: { ok: true } },
		});
	});

	it("keeps non-plain objects without the target method", () => {
		class Box {
			public value: number;

			public constructor(value: number) {
				this.value = value;
			}
		}

		const input = new Box(12);
		const result = DCommon.transformer(input, "toNative");

		expect(result).toBe(input);
	});

	it("creates a transformer compatible with pipe", () => {
		const toNative = DCommon.createTransformer("toNative");
		const result = DCommon.pipe(
			{
				toNative() {
					return 42 as const;
				},
			},
			toNative,
		);

		expect(result).toBe(42);

		type check = DCommon.ExpectType<
			typeof result,
			42,
			"strict"
		>;
	});

	it("exposes a toJSON transformer", () => {
		const result = DCommon.toJSON({
			toJSON() {
				return "ok" as const;
			},
		});

		expect(result).toBe("ok");

		type check = DCommon.ExpectType<
			typeof result,
			"ok",
			"strict"
		>;
	});
});
