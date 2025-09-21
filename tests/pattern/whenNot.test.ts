import { pipe, type ExpectType } from "@scripts/common";
import { DPattern } from "@scripts/index";

describe("pattern whenNot", () => {
	it("whenNot match", () => {
		const result = DPattern.whenNot(
			true
				? "test"
				: "toto",
			(value) => {
				type check = ExpectType<
					typeof value,
					"test" | "toto",
					"strict"
				>;

				return value === "toto";
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
		const result = DPattern.whenNot(
			true
				? "test"
				: "toto",
			(value) => value === "test",
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
				? "test"
				: "toto",
			DPattern.whenNot(
				(value) => value === "test",
				(value) => {
					type check = ExpectType<
						typeof value,
						"toto",
						"strict"
					>;

					return 10;
				},
			),
			DPattern.otherwise((rest) => rest),
		);

		expect(result).toBe("test");

		type check = ExpectType<
			typeof result,
			"test" | 10,
			"strict"
		>;
	});
});
