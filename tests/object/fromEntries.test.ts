import { DArray, DEither, DObject, type ExpectType, pipe, when, whenNot } from "@scripts";

it("fromEntries", () => {
	const input: {
		test: string;
		prop?: number;
		toto?: string;
		tata?: string;
	} = {
		test: "ok",
		prop: undefined,
		toto: "10",
	};

	const result = pipe(
		input,
		DObject.entries,
		DArray.filter((entry) => entry[1] !== undefined),
		DObject.fromEntries,
		(value) => value,
		when(
			DObject.hasKeys(["test", "toto"]),
			DEither.success,
		),
		whenNot(
			DEither.isRight,
			DEither.error,
		),
	);

	expect(result).toStrictEqual(
		DEither.success({
			test: "ok",
			toto: "10",
		}),
	);

	type check = ExpectType<
		typeof result,
		| DEither.Success<{
			test: string;
			toto: string;
			prop?: number | undefined;
			tata?: string | undefined;
		}>
		| DEither.Error<{
			test?: string | undefined;
			prop?: number | undefined;
			toto?: string | undefined;
			tata?: string | undefined;
		}>,
		"strict"
	>;
});
