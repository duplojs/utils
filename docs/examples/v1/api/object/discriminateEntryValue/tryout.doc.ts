import { type ExpectType, isType, O } from "@duplojs/utils";

const entry = true
	? O.entry("name", "Ada")
	: O.entry("age", 42);

if (O.discriminateEntryValue(entry, isType("string"))) {
	// entry value is narrowed to string
	type check = ExpectType<
		typeof entry,
		["name", string],
		"strict"
	>;
}
