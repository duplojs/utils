import { unwrap, type ExpectType, E, DPE } from "@duplojs/utils";

const schema = DPE.coerce.number()
	.pipe(DPE.number())
	.transform((value) => value + 1);

const result = schema.parse("41");

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		number,
		"strict"
	>;
} else {
	const error = unwrap(result);
	type check = ExpectType<
		typeof error,
		DPE.DataParserError,
		"strict"
	>;
}
