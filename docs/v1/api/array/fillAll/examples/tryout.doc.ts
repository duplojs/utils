import { A, type ExpectType } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"];

const result = A.fillAll(input, "archived" as const);

type check = ExpectType<
	typeof result,
	"archived"[],
	"strict"
>;
