import { A, type ExpectType } from "@duplojs/utils";

const input = [["frontend", ["ui", "ux"]], [["backend"], ["api", ["queue"]]]] as const;

const result = A.flat(
	input,
	2,
);

type check = ExpectType<
	typeof result,
	("frontend" | "ui" | "ux" | "backend" | "api" | readonly ["queue"])[],
	"strict"
>;

