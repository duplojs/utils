import { type GetPropsWithValueExtends } from "@scripts/object";
import { type DataParser } from "../base";
import type * as AllDataParser from "../parsers";
import type * as AllDataParserExtended from "../extended";
import { type DataParserExtended } from "../baseExtended";

export interface DataParserCustom {
	base: DataParser;
}

export type DataParsers = (
	| DataParserCustom[GetPropsWithValueExtends<DataParserCustom, DataParser>]
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
	| AllDataParser.DataParserRecord
	| AllDataParser.DataParserRecover
);

export interface DataParserExtendedCustom {
	base: DataParserExtended;
}

export type DataParsersExtended = (
	| DataParserExtendedCustom[GetPropsWithValueExtends<DataParserExtendedCustom, DataParserExtended>]
	| AllDataParserExtended.DataParserStringExtended
	| AllDataParserExtended.DataParserObjectExtended
	| AllDataParserExtended.DataParserNumberExtended
	| AllDataParserExtended.DataParserLiteralExtended
	| AllDataParserExtended.DataParserUnionExtended
	| AllDataParserExtended.DataParserArrayExtended
	| AllDataParserExtended.DataParserBigIntExtended
	| AllDataParserExtended.DataParserTupleExtended
	| AllDataParserExtended.DataParserTransformExtended
	| AllDataParserExtended.DataParserBooleanExtended
	| AllDataParserExtended.DataParserDateExtended
	| AllDataParserExtended.DataParserTimeExtended
	| AllDataParserExtended.DataParserNilExtended
	| AllDataParserExtended.DataParserEmptyExtended
	| AllDataParserExtended.DataParserTemplateLiteralExtended
	| AllDataParserExtended.DataParserPipeExtended
	| AllDataParserExtended.DataParserNullableExtended
	| AllDataParserExtended.DataParserOptionalExtended
	| AllDataParserExtended.DataParserLazyExtended
	| AllDataParserExtended.DataParserUnknownExtended
	| AllDataParserExtended.DataParserRecordExtended
	| AllDataParserExtended.DataParserRecoverExtended
);
