import { type GetKindValue } from "@scripts/common";
import { type DataParser, type dataParserKind } from "../base";

export type Output<
	GenericDataParser extends DataParser,
> = GetKindValue<
	typeof dataParserKind,
	GenericDataParser
>["output"];
