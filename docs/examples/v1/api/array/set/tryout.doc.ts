import { A, type ExpectType } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = A.set(input, 1, "review");

type check = ExpectType<
	typeof result,
	("todo" | "inProgress" | "done" | "review")[],
	"strict"
>;
