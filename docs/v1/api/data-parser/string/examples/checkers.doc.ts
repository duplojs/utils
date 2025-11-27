import * as DDataParser from "@duplojs/utils/dataParser";
import { unwrap } from "@duplojs/utils/common";
import * as DEither from "@duplojs/utils/either";

const schema = DDataParser
	.string()
	.addChecker(
		DDataParser.checkerStringMin(5, { errorMessage: "string.too-short" }),
		DDataParser.checkerStringMax(30),
		DDataParser.checkerEmail({ normalize: true }),
	);

const result = schema.parse("foo");

if (DEither.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
