import { type ExpectType, S } from "@duplojs/utils";

const maybe = true ? "DuploJS" : "DuploTS";

if (S.endsWith(maybe, "JS")) {
	type check = ExpectType<
		typeof maybe,
		"DuploJS",
		"strict"
	>;
} else {
	type check = ExpectType<
		typeof maybe,
		"DuploTS",
		"strict"
	>;
}
