import { type DataParser } from "../base";
import type * as AllDataParser from "../parsers";

export type DataParsers = (
	| DataParser
	| AllDataParser.DataParserString
	| AllDataParser.DataParserObject
	| AllDataParser.DataParserNumber
	| AllDataParser.DataParserLiteral
	| AllDataParser.DataParserUnion
	| AllDataParser.DataParserArray
	| AllDataParser.DataParserBigInt
	| AllDataParser.DataParserTuple
	| AllDataParser.DataParserTransform
	| AllDataParser.DataParserBoolean
	| AllDataParser.DataParserNil
	| AllDataParser.DataParserEmpty
	| AllDataParser.DataParserTemplateLiteral
	| AllDataParser.DataParserPipe
);
