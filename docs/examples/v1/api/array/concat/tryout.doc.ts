import { A, type ExpectType } from "@duplojs/utils";

const base = ["todo", "inProgress"] as const;
const newSteps = ["review", "done"] as const;

const result = A.concat(base, newSteps);

type check = ExpectType<
	typeof result,
	("todo" | "inProgress" | "review" | "done")[],
	"strict"
>;
