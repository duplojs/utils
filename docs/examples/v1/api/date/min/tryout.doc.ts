import { D, type ExpectType } from "@duplojs/utils";

const input = [D.yesterday(), D.today(), D.tomorrow()] as const;

const result = D.min(input);

type check = ExpectType<
	typeof result,
	D.TheDate,
	"strict"
>;
