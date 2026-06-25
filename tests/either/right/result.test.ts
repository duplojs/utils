import { DEither, wrapValue, type ExpectType, keyKindPrefix, pipe } from "@scripts";

describe("result", () => {
	it("creates a Result with the provided information and value", () => {
		const either = DEither.result("result", 50);

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${DEither.resultKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "result",
			[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
			...wrapValue(50),
		});

		type check = ExpectType<
			typeof either,
			DEither.Result<"result", 50>,
			"strict"
		>;
	});

	it("uses undefined as value when it is explicitly provided", () => {
		const either = DEither.result("result", undefined);

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${DEither.resultKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "result",
			[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
			...wrapValue(undefined),
		});

		type check = ExpectType<
			typeof either,
			DEither.Result<"result", undefined>,
			"strict"
		>;
	});

	it("works in a pipe chain using the curried overload", () => {
		const either = pipe(
			10,
			DEither.result("result"),
		);

		expect(either).toStrictEqual(DEither.result("result", 10));

		type check = ExpectType<
			typeof either,
			DEither.Result<"result", 10>,
			"strict"
		>;
	});
});
