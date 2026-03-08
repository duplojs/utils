import { type DataParserChecker } from "../base";
import type * as AllDataParser from "../parsers";

export interface CheckerCustom {
	base: DataParserChecker;
}

export type DataParserCheckers = (
	| CheckerCustom[keyof CheckerCustom]
	| AllDataParser.DataParserCheckerUrl
	| AllDataParser.DataParserCheckerArrayMax
	| AllDataParser.DataParserCheckerArrayMin
	| AllDataParser.DataParserCheckerBigIntMax
	| AllDataParser.DataParserCheckerBigIntMin
	| AllDataParser.DataParserCheckerNumberMax
	| AllDataParser.DataParserCheckerNumberMin
	| AllDataParser.DataParserCheckerInt
	| AllDataParser.DataParserCheckerEmail
	| AllDataParser.DataParserCheckerRefine
	| AllDataParser.DataParserCheckerTimeMin
	| AllDataParser.DataParserCheckerTimeMax
);
