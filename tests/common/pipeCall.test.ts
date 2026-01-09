import { isType, pipe, pipeCall, when } from "@scripts";

describe("pipeCall", () => {
	it("works inside pipe", () => {
		const fnc = (value: number) => value + 1;

		const result = pipe(
			10 as number | string,
			when(
				isType("number"),
				pipeCall(fnc),
			),
		);

		expect(result).toBe(11);
	});
});
