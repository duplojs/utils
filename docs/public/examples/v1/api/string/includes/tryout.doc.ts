import { type ExpectType, S } from "@duplojs/utils";

const maybe = true ? "DuplpoJS" : "DuploTS";

if (S.includes(maybe, "JS")) {
	type check = ExpectType<
		typeof maybe,
		"DuplpoJS",
		"strict"
	>;
} else {
	type check = ExpectType<
		typeof maybe,
		"DuploTS",
		"strict"
	>;
}
