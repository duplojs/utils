import { type ComputedTypeError } from "../../common";
import type * as DDataParser from "../../dataParser";
export type DataParserContainTransform<GenericDataParser extends DDataParser.DataParserBase> = DDataParser.Contain<GenericDataParser, DDataParser.DataParserTransform<any>> extends true ? ComputedTypeError<"It is forbidden to use a transform dataParser."> : GenericDataParser;
