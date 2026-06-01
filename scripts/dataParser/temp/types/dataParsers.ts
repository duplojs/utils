import type { DataParser } from "../base";
import type * as AllDataParser from "../parsers";

export interface DataParserCustom {
	dataParser: DataParser;
}

export type DataParsers = (
	| DataParserCustom[keyof DataParserCustom]
	| AllDataParser.DataParserArray
	| AllDataParser.DataParserString
	| AllDataParser.DataParserNumber
	| AllDataParser.DataParserBigInt
	| AllDataParser.DataParserTime
	| AllDataParser.DataParserObject
	| AllDataParser.DataParserRecord
);
