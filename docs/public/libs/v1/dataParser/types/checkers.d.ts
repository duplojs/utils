import { type IsExtends } from "../../common";
import { type DataParserChecker } from "../base";
import type * as AllDataParser from "../parsers";
import { type TheTime } from "../../date";
export interface CheckerCustom {
    base: DataParserChecker;
}
export type DataParserCheckers = (CheckerCustom[keyof CheckerCustom] | AllDataParser.DataParserCheckerArrayMax | AllDataParser.DataParserCheckerArrayMin | AllDataParser.DataParserCheckerBigIntMax | AllDataParser.DataParserCheckerBigIntMin | AllDataParser.DataParserCheckerNumberMax | AllDataParser.DataParserCheckerNumberMin | AllDataParser.DataParserCheckerInt | AllDataParser.DataParserCheckerStringMax | AllDataParser.DataParserCheckerStringMin | AllDataParser.DataParserCheckerEmail | AllDataParser.DataParserCheckerRegex | AllDataParser.DataParserCheckerUrl | AllDataParser.DataParserCheckerUuid | AllDataParser.DataParserCheckerRefine | AllDataParser.DataParserCheckerTimeMin | AllDataParser.DataParserCheckerTimeMax);
export interface EligibleChecker<GenericValue extends unknown> {
    base: DataParserChecker<GenericValue>;
    refine: AllDataParser.DataParserCheckerRefine<AllDataParser.DataParserCheckerDefinitionRefine<GenericValue>>;
    array: IsExtends<GenericValue, unknown[]> extends true ? (AllDataParser.DataParserCheckerArrayMax | AllDataParser.DataParserCheckerArrayMin) : never;
    bigInt: IsExtends<GenericValue, bigint> extends true ? (AllDataParser.DataParserCheckerBigIntMax | AllDataParser.DataParserCheckerBigIntMin) : never;
    number: IsExtends<GenericValue, number> extends true ? (AllDataParser.DataParserCheckerNumberMax | AllDataParser.DataParserCheckerNumberMin | AllDataParser.DataParserCheckerInt) : never;
    string: IsExtends<GenericValue, string> extends true ? (AllDataParser.DataParserCheckerStringMax | AllDataParser.DataParserCheckerStringMin | AllDataParser.DataParserCheckerEmail | AllDataParser.DataParserCheckerRegex | AllDataParser.DataParserCheckerUrl | AllDataParser.DataParserCheckerUuid) : never;
    time: IsExtends<GenericValue, TheTime> extends true ? (AllDataParser.DataParserCheckerTimeMin | AllDataParser.DataParserCheckerTimeMax) : never;
}
export type GetEligibleChecker<GenericValue extends unknown> = EligibleChecker<GenericValue> extends infer InferredResult ? Extract<InferredResult[keyof InferredResult], DataParserChecker<GenericValue>> : never;
