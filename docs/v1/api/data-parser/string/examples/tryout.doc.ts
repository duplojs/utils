import * as DDataParser from "@duplojs/utils/dataParser";
import * as DEither from "@duplojs/utils/either";
import { unwrap, type ExpectType } from "@duplojs/utils/common";

const schema = DDataParser.string();

const result = schema.parse("DuploJS utils");

if (DEither.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		string,
		"strict"
	>;
} else {
	const error = unwrap(result);
	type check = ExpectType<
		typeof error,
		DDataParser.DataParserError,
		"strict"
	>;
}
