import { D, type ExpectType } from "@duplojs/utils";

const input = [
	D.tomorrow(),
	D.yesterday(),
	D.today(),
] as const;

const result = D.sort(input, "ASC");

type check = ExpectType<
	typeof result,
	D.TheDate[],
	"strict"
>;
