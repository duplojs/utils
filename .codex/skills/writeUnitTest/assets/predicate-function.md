```ts
import { D<Namespace>, type ExpectType, pipe, when } from "@scripts";

describe("<functionName>", () => {
	it("should validate the type predicate", () => {
		const value = /* something like: */ (null as null | /* NarrowedType */);

		const result = D<Namespace>.<functionName>(value);

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				/* NarrowedType */,
				"strict"
			>;
		}
	});

	it("should validate the type predicate in pipe", () => {
		pipe(
			/* input with union type */,
			when(
				D<Namespace>.<functionName>,
				(value) => {
					type check = ExpectType<
						typeof value,
						/* NarrowedType */,
						"strict"
					>;
				},
			),
		);
	});
});
```