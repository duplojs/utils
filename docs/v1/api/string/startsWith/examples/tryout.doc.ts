import { type ExpectType, S } from "@duplojs/utils";

const maybe = true ? "DuploJS" : "NestJS";

if (S.startsWith(maybe, "Du")) {
	type check = ExpectType<
		typeof maybe,
		"DuploJS",
		"strict"
	>;
} else {
	type check = ExpectType<
		typeof maybe,
		"NestJS",
		"strict"
	>;
}
