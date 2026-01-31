import { DEither, DString, pipe, type ExpectType, when, whenNot } from "@scripts";

describe("isKeyof", () => {
	it("normal", () => {
		expect(DString.isKeyof("toto", { toto: 1 })).toBe(true);
		expect(DString.isKeyof("test", { toto: 1 })).toBe(false);

		const key = "toto" as string;

		if (DString.isKeyof(key, { toto: 1 })) {
			type check = ExpectType<
				typeof key,
				"toto",
				"strict"
			>;
		}
	});

	it("use in pipe", () => {
		const result = pipe(
			"test" as string,
			when(
				DString.isKeyof({
					test: 1,
					toto: "ee",
				}),
				DEither.success,
			),
			whenNot(
				DEither.isRight,
				DEither.error,
			),
		);

		expect(result).toStrictEqual(DEither.success("test"));

		type check = ExpectType<
			typeof result,
			DEither.Success<"toto" | "test"> | DEither.Error<string>,
			"strict"
		>;
	});
});

