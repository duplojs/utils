import { A, type ExpectType } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = A.reverse(input);

type check = ExpectType<
	typeof result,
	["done", "inProgress", "todo"],
	"strict"
>;
