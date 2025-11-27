import { DEither, unwrap, DDataParserExtended } from "@duplojs/utils";

const schema = DDataParserExtended
	.string()
	.min(5, { errorMessage: "string.too-short" })
	.max(30);

const result = schema.parse("nestjs");

if (DEither.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
