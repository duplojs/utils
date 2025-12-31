import { A, type ExpectType } from "@duplojs/utils";

const input = [
	"alpha",
	"beta",
];

if (A.lengthEqual(input, 2)) {
	type check = ExpectType<
		typeof input,
		[string, string],
		"strict"
	>;
}
