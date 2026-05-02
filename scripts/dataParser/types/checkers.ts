import { type DataParserChecker } from "../base";
import type * as AllDataParser from "../parsers";

export interface CheckerCustom {
	base: DataParserChecker;
}

export type DataParserCheckers = (
	| CheckerCustom[keyof CheckerCustom]
	| AllDataParser.DataParserCheckerArrayMax
	| AllDataParser.DataParserCheckerArrayMin
	| AllDataParser.DataParserCheckerBigIntMax
	| AllDataParser.DataParserCheckerBigIntMin
	| AllDataParser.DataParserCheckerNumberMax
	| AllDataParser.DataParserCheckerNumberMin
	| AllDataParser.DataParserCheckerInt
	| AllDataParser.DataParserCheckerStringMax
	| AllDataParser.DataParserCheckerStringMin
	| AllDataParser.DataParserCheckerEmail
	| AllDataParser.DataParserCheckerRegex
	| AllDataParser.DataParserCheckerUrl
	| AllDataParser.DataParserCheckerUuid
	| AllDataParser.DataParserCheckerRefine
	| AllDataParser.DataParserCheckerTimeMin
	| AllDataParser.DataParserCheckerTimeMax
);
