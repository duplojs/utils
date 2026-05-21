import { isType, O, pipe, when } from "@scripts";

const entry = true
	? O.entry("name", "Ada")
	: O.entry("age", 42);

if (O.discriminateEntryValue(entry, isType("string"))) {
	// entry is ["name", string]
}

pipe(
	entry,
	when(
		O.discriminateEntryValue(isType("number")),
		(value) => {
			// value is ["age", number]
		},
	),
);

O.discriminateEntryValue(
	O.entry("status", "ready"),
	isType("string"),
); // true
