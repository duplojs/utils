import { type ExpectType, type E, DP } from "@duplojs/utils";

const schema = DP.object({
	name: DP.string(),
	age: DP.number(),
});

const result = schema.parse({
	name: "ZeRiix",
	age: 24,
});

type check = ExpectType<
	typeof result,
	E.Error<DP.DataParserError> | E.Success<{
		name: string;
		age: number;
	}>,
	"strict"
>;
