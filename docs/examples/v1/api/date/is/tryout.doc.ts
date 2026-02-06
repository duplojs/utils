import { D, type ExpectType } from "@duplojs/utils";

const input = D.now() as unknown;

if (D.is(input)) {
	type check = ExpectType<
		typeof input,
		D.TheDate,
		"strict"
	>;
}
