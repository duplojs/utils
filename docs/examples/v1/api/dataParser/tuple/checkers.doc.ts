import { DP, type E, type ExpectType } from "@duplojs/utils";

const schema = DP
	.tuple([
		DP.string(),
		DP.number(),
	])
	.addChecker(
		DP.checkerArrayMin(2),
		DP.checkerArrayMax(4),
		DP.checkerRefine(
			([label]) => label.startsWith("page-"),
			{
				errorMessage: "tuple.label.invalid",
			},
		),
	);

const result = schema.parse([
	"page-home",
	1,
]);

type check = ExpectType<
	typeof result,
	E.Error<DP.DataParserError> | E.Success<[string, number]>,
	"strict"
>;
