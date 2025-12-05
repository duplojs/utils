import { A, type ExpectType } from "@duplojs/utils";

const input = ["todo", "inProgress"];

if (A.maxElements(input, 3)) {
	type check = ExpectType<
		typeof input,
		string[],
		"strict"
	>;
}
