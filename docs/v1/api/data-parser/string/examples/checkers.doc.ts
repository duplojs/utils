import { unwrap, DP, E } from "@duplojs/utils";

const schema = DP
	.string()
	.addChecker(
		DP.checkerStringMin(5, { errorMessage: "string.too-short" }),
		DP.checkerStringMax(30),
		DP.checkerEmail({ normalize: true }),
	);

const result = schema.parse("foo");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
