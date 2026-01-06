```ts
import { D<Namespace>, type ExpectType, pipe } from "@scripts";

describe("<functionName>", () => {
	it("should support type guard predicates", () => {
		const input = /* e.g. */ (["a", 1, "b", 2] as const);

		const result = D<Namespace>.<functionName>(
			input,
			(value) => typeof value === "number",
		);

		expect(result).toEqual(/* expected */);

		type check = ExpectType<
			typeof result,
			/* Expected narrowed array type */,
			"strict"
		>;
	});

	it("should work in pipe with a predicate", () => {
		const result = pipe(
			/* input */,
			// curried overload to place predicate in pipe
			D<Namespace>.<functionName>(
				(value) => typeof value === "string",
			),
		);

		expect(result).toEqual(/* expected */);

		type check = ExpectType<
			typeof result,
			/* Expected narrowed array type */,
			"strict"
		>;
	});
});
```