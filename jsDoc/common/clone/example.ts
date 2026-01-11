import { clone } from "@scripts";

const original = {
	user: { id: 1 },
	tags: [
		"a",
		"b",
	],
} as const;

const copied = clone(original);

// type: { readonly user: { readonly id: 1; }; readonly tags: readonly ["a", "b"]; }
