import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.templateLiteral([
	"order-",
	DP.coerce.number().addChecker(
		DP.checkerInt(),
	),
	"-",
	DP.literal(["foo", "lias"]),
]);

const result = schema.parse("order-42-lias");

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		`order-${number}-foo` | `order-${number}-lias`,
		"strict"
	>;
} else {
	const error = unwrap(result);
	type check = ExpectType<
		typeof error,
		DP.DataParserError,
		"strict"
	>;
}
