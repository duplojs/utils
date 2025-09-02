import { when } from "@scripts/common/when";
import { whenNot } from "@scripts/common/whenNot";
import { DArray, DEither, DObject, type ExpectType, pipe } from "@scripts/index";

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
		| DEither.EitherSuccess<{
			test: string;
			toto: string;
			prop?: number | undefined;
			tata?: string | undefined;
		}>
		| DEither.EitherError<{
			test?: string | undefined;
			prop?: number | undefined;
			toto?: string | undefined;
			tata?: string | undefined;
		}>,
		"strict"
	>;
});
