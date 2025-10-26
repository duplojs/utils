import { type DataParserChecker } from "../base";
import type * as AllDataParser from "../parsers";

export type Checkers = (
	| DataParserChecker
	| AllDataParser.DataParserCheckerUrl
	| AllDataParser.DataParserCheckerArrayMax
	| AllDataParser.DataParserCheckerArrayMin
	| AllDataParser.DataParserCheckerBigIntMax
	| AllDataParser.DataParserCheckerBigIntMin
	| AllDataParser.DataParserCheckerNumberMax
	| AllDataParser.DataParserCheckerNumberMin
	| AllDataParser.DataParserCheckerInt
	| AllDataParser.DataParserCheckerEmail
);
