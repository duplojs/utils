import { DP, E, N, S, unwrap } from "@duplojs/utils";

const schema = DP.templateLiteral([
	"user-",
	DP.coerce.number(),
]).addChecker(
	DP.checkerRefine(
		(value) => N.less(S.length(value), 12),
		{
			errorMessage: "template.too-long",
		},
	),
);

const result = schema.parse("user-9999");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
