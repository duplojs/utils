import { toCurriedPredicate, pipe, type ExpectType, when } from "@scripts";

describe("toCurriedPredicate", () => {
	it("works in pipe with curried predicate", () => {
		const input: string | number = "hello";
		const result = pipe(
			input,
			when(
				toCurriedPredicate(
					(value: string | number): value is string => typeof value === "string",
				),
				(value) => {
					type check = ExpectType<
						typeof value,
						string,
						"strict"
					>;
					return true;
				},
			),
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			number | boolean,
			"strict"
		>;
	});
});
