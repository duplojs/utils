import { O, pipe, S, when } from "@scripts";

const entry = true
	? O.entry("name", "Ada")
	: O.entry("age", 42);

if (O.discriminateEntryKey(entry, (key) => key === "name")) {
	// entry is ["name", string]
}

pipe(
	entry,
	when(
		O.discriminateEntryKey((key) => key === "age"),
		(value) => {
			// value is ["age", number]
		},
	),
);

O.discriminateEntryKey(
	O.entry("status", "ready"),
	S.startsWith("st"),
); // true
