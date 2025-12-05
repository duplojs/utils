import { A, type ExpectType } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = A.pop(input);

type check = ExpectType<
	typeof result,
	["todo", "inProgress"],
	"strict"
>;
