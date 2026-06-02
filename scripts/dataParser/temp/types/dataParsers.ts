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
	| AllDataParser.DataParserLiteral
	| AllDataParser.DataParserUnion
	| AllDataParser.DataParserBigInt
	| AllDataParser.DataParserTuple
	| AllDataParser.DataParserTransform
	| AllDataParser.DataParserBoolean
	| AllDataParser.DataParserDate
	| AllDataParser.DataParserTime
	| AllDataParser.DataParserNil
	| AllDataParser.DataParserEmpty
	| AllDataParser.DataParserTemplateLiteral
	| AllDataParser.DataParserPipe
	| AllDataParser.DataParserNullable
	| AllDataParser.DataParserOptional
	| AllDataParser.DataParserLazy
	| AllDataParser.DataParserUnknown
	| AllDataParser.DataParserObject
	| AllDataParser.DataParserRecord
	| AllDataParser.DataParserRecover
);
