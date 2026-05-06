import { type ComputedTypeError } from "@scripts/common";
import type * as DDataParser from "@scripts/dataParser";

export type DataParserContainTransform<
	GenericDataParser extends DDataParser.DataParserBase,
> = DDataParser.Contain<
	GenericDataParser,
	DDataParser.DataParserTransform<any>
> extends true
	? ComputedTypeError<"It is forbidden to use a transform dataParser.">
	: GenericDataParser;
