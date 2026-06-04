import { type GetKindValue } from "@scripts/common";
import { type DataParser, type dataParserKind } from "../base";

export type Input<
	GenericDataParser extends DataParser,
> = GetKindValue<
	typeof dataParserKind,
	GenericDataParser
>["input"];
