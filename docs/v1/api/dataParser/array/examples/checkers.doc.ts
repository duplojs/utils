import { A, DP, E, N, unwrap } from "@duplojs/utils";

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

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
