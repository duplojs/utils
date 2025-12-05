import { A, type ExpectType } from "@duplojs/utils";

const input = ["Docs", "API", "Array"] as const;

const result = A.join(input, " / ");

type check = ExpectType<
	typeof result,
	"Docs / API / Array",
	"strict"
>;

