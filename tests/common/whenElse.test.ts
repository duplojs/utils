import { whenElse, pipe, type ExpectType, equal, DString } from "@scripts";

describe("whenElse", () => {
	it("whenElse match branch", () => {
		const result = whenElse(
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
			(value) => {
				type check = ExpectType<
					typeof value,
					"toto",
					"strict"
				>;

				return 4;
			},
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			10 | 4,
			"strict"
		>;
	});

	it("whenElse else branch", () => {
		const result = whenElse(
			true
				? "test"
				: "toto",
			equal("toto"),
			(value) => {
				type check = ExpectType<
					typeof value,
					"toto",
					"strict"
				>;

				return 4;
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
			4 | 10,
			"strict"
		>;
	});

	it("whenElse in pipe", () => {
		const result = pipe(
			true
				? "test"
				: "toto",
			whenElse(
				equal("test"),
				DString.split(""),
				DString.first,
			),
		);

		expect(result).toStrictEqual(["t", "e", "s", "t"]);

		type check = ExpectType<
			typeof result,
			"t" | ["t", "e", "s", "t"],
			"strict"
		>;
	});
});
