import { pipe, type ExpectType } from "@scripts/common";
import { when } from "@scripts/common/when";

describe("when", () => {
	it("when match", () => {
		const result = when(
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

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			"toto" | 10,
			"strict"
		>;
	});

	it("when not match", () => {
		const result = when(
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
			"test" | 10,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? "test"
				: "toto",
			when(
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
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			"toto" | number,
			"strict"
		>;
	});
});
