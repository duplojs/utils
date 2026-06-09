import { type GetKindValue } from "../../common";
import { type DataParser, type dataParserKind } from "../base";
export type Input<GenericDataParser extends DataParser> = GetKindValue<typeof dataParserKind, GenericDataParser>["input"];
