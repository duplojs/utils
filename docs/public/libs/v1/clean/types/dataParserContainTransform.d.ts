import type * as DDataParser from "../../dataParser";
declare const SymbolErrorForbidden: unique symbol;
export type DataParserContainTransform<GenericDataParser extends DDataParser.DataParser> = DDataParser.Contain<GenericDataParser, DDataParser.DataParserTransform> extends true ? {
    [SymbolErrorForbidden]: "It is forbidden to use a transform dataParser.";
} : GenericDataParser;
export {};
