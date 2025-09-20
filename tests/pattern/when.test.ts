import { pipe, type ExpectType } from "@scripts/common";
import { DPattern } from "@scripts/index";

describe("pattern when", () => {
	it("when match", () => {
		const result = DPattern.when(
			true
				? "test"
				: "toto",
			(value) => {
				type check = ExpectType<
					typeof value,
					"test" | "toto",
					"strict"
				>;

				return value === "test";
			},
			(value) => {
				type check = ExpectType<
					typeof value,
					"test",
					"strict"
				>;

				return 10;
			},
		);

		expect(result).toStrictEqual(DPattern.result(10));

		type check = ExpectType<
			typeof result,
			"toto" | DPattern.PatternResult<10>,
			"strict"
		>;
	});

	it("when not match", () => {
		const result = DPattern.when(
			true
				? "test"
				: "toto",
			(value) => value === "toto",
			(value) => {
				type check = ExpectType<
					typeof value,
					"toto",
					"strict"
				>;

				return 10;
			},
		);

		expect(result).toBe("test");

		type check = ExpectType<
			typeof result,
			"test" | DPattern.PatternResult<10>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? "test" as const
				: 500 as const,
			DPattern.when(
				(value) => value === "test",
				(value) => {
					type check = ExpectType<
						typeof value,
						"test",
						"strict"
					>;

					return 10;
				},
			),
			DPattern.when(
				(value) => value === 500,
				() => "ok",
			),
			DPattern.exhaustive,
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			10 | "ok",
			"strict"
		>;
	});
});
