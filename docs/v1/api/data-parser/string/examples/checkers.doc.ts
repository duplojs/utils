import { unwrap, DP, E } from "@duplojs/utils";

const schema = DP
	.coerce
	.string()
	.addChecker(
		DP.checkerStringMin(5, { errorMessage: "input.too-short" }),
		DP.checkerStringMax(30),
	);

const result = schema.parse(1234567890);

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
