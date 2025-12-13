import { A, type ExpectType } from "@duplojs/utils";

const input: ("draft" | "published" | null)[] = [
	"draft",
	null,
	"published",
];

if (A.notIncludes(input, null)) {
	type check = ExpectType<
		typeof input,
		("draft" | "published")[],
		"strict"
	>;
}
