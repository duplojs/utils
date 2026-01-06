```ts
import { D<Namespace>, type ExpectType, pipe } from "@scripts";

describe("<functionName>", () => {
	it("should <describe the main expected behavior in English>", () => {
		const result = D<Namespace>.<functionName>(/* classic call inputs */);
		expect(result).toEqual(/* expected */);

		type check = ExpectType<
			typeof result,
			/* ExpectedType */,
			"strict"
		>;
	});

	it("should <describe an edge case or boundary in English>", () => {
		const result = D<Namespace>.<functionName>(/* inputs */);
		expect(result).toEqual(/* expected */);

		type check = ExpectType<
			typeof result,
			/* ExpectedType */,
			"strict"
		>;
	});

	it("should <describe immutability or side-effect expectation in English>", () => {
		const input = /* input */;
		const result = D<Namespace>.<functionName>(input as any /*, other args */);

		expect(result).toEqual(/* expected */);
		expect(input).toEqual(/* original expected */);
	});

	it("should work in pipe", () => {
		const result = pipe(
			/* input */,
			// Use the curried overload when necessary
			D<Namespace>.<functionName>(/* curried args */),
		);

		expect(result).toEqual(/* expected */);

		type check = ExpectType<
			typeof result,
			/* ExpectedType */,
			"strict"
		>;
	});
});
```