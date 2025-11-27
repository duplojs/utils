import * as DDataParserCoerce from "@duplojs/utils/dataParserCoerce";
import { unwrap, type ExpectType } from "@duplojs/utils/common";
import * as DEither from "@duplojs/utils/either";
import type * as DDataParser from "@duplojs/utils/dataParser";

const schema = DDataParserCoerce.string();

const result = schema.parse(11111);

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
