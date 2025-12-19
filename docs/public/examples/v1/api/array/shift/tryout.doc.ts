import { A, type ExpectType } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = A.shift(input);

type check = ExpectType<
	typeof result,
	["inProgress", "done"],
	"strict"
>;

