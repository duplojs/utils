import { A, type ExpectType } from "@duplojs/utils";

const input = ["login", "dashboard", "settings"];

if (A.minElements(input, 2)) {
	type check = ExpectType<
		typeof input,
		[string, string, ...string[]],
		"strict"
	>;
}

