import { A, type ExpectType } from "@duplojs/utils";

const input = ["todo", "inProgress", "done", "archived"] as const;

const result = A.fill(input, "review", 1, 3);
// result: ["todo", "review", "review", "archived"]

type check = ExpectType<
	typeof result,
	("todo" | "inProgress" | "done" | "archived" | "review")[],
	"strict"
>;

