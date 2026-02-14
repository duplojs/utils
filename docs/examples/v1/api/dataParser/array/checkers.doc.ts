import { A, DP, type E, type ExpectType, N } from "@duplojs/utils";

const schema = DP
	.array(DP.coerce.number())
	.addChecker(
		DP.checkerArrayMin(1),
		DP.checkerArrayMax(10),
		DP.checkerRefine(
			A.every(N.greater(0)),
			{
				errorMessage: "array.must-be-positive",
			},
		),
	);

const result = schema.parse(["1", "2", "3"]);

type check = ExpectType<
	typeof result,
	E.Error<DP.DataParserError> | E.Success<number[]>,
	"strict"
>;
