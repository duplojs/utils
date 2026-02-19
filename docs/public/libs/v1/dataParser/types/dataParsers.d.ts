import type { DataParser } from "../base";
import type * as AllDataParser from "../parsers";
import type { DataParserExtended } from "../baseExtended";
import type * as AllDataParserExtended from "../extended";
export interface DataParserCustom {
    base: DataParser;
}
export type DataParsers = (DataParserCustom[keyof DataParserCustom] | AllDataParser.DataParserString | AllDataParser.DataParserObject | AllDataParser.DataParserNumber | AllDataParser.DataParserLiteral | AllDataParser.DataParserUnion | AllDataParser.DataParserArray | AllDataParser.DataParserBigInt | AllDataParser.DataParserTuple | AllDataParser.DataParserTransform | AllDataParser.DataParserBoolean | AllDataParser.DataParserDate | AllDataParser.DataParserTime | AllDataParser.DataParserNil | AllDataParser.DataParserEmpty | AllDataParser.DataParserTemplateLiteral | AllDataParser.DataParserPipe | AllDataParser.DataParserNullable | AllDataParser.DataParserOptional | AllDataParser.DataParserLazy | AllDataParser.DataParserUnknown | AllDataParser.DataParserRecord | AllDataParser.DataParserRecover);
export interface DataParserExtendedCustom {
    base: DataParserExtended;
}
export type DataParsersExtended = (DataParserExtendedCustom[keyof DataParserExtendedCustom] | AllDataParserExtended.DataParserStringExtended | AllDataParserExtended.DataParserObjectExtended | AllDataParserExtended.DataParserNumberExtended | AllDataParserExtended.DataParserLiteralExtended | AllDataParserExtended.DataParserUnionExtended | AllDataParserExtended.DataParserArrayExtended | AllDataParserExtended.DataParserBigIntExtended | AllDataParserExtended.DataParserTupleExtended | AllDataParserExtended.DataParserTransformExtended | AllDataParserExtended.DataParserBooleanExtended | AllDataParserExtended.DataParserDateExtended | AllDataParserExtended.DataParserTimeExtended | AllDataParserExtended.DataParserNilExtended | AllDataParserExtended.DataParserEmptyExtended | AllDataParserExtended.DataParserTemplateLiteralExtended | AllDataParserExtended.DataParserPipeExtended | AllDataParserExtended.DataParserNullableExtended | AllDataParserExtended.DataParserOptionalExtended | AllDataParserExtended.DataParserLazyExtended | AllDataParserExtended.DataParserUnknownExtended | AllDataParserExtended.DataParserRecordExtended | AllDataParserExtended.DataParserRecoverExtended);
