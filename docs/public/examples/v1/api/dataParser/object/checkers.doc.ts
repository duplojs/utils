import { DP, type E, type ExpectType } from "@duplojs/utils";

const schema = DP.object({
	name: DP.string(),
	age: DP
		.coerce
		.number()
		.addChecker(DP.checkerNumberMin(18)),
	roles: DP
		.array(DP.literal(["admin", "editor", "viewer"]))
		.addChecker(
			DP.checkerArrayMin(1),
			DP.checkerArrayMax(3),
		),
});

const result = schema.parse({
	name: "mathcovax",
	age: "23",
	roles: ["admin"],
});

type check = ExpectType<
	typeof result,
	E.EitherError<DP.DataParserError> | E.EitherSuccess<{
		name: string;
		age: number;
		roles: ("admin" | "editor" | "viewer")[];
	}>,
	"strict"
>;
