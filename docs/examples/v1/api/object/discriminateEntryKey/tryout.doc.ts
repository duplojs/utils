import { equal, type ExpectType, O } from "@duplojs/utils";

const entry = true
	? O.entry("name", "Ada")
	: O.entry("age", 42);

if (O.discriminateEntryKey(entry, equal("name"))) {
	// entry key is narrowed to "name"
	type check = ExpectType<
		typeof entry,
		["name", string],
		"strict"
	>;
}
