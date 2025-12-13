import { type Constraint } from "../base";
import * as DDataParser from "../../../dataParser";
export declare const Int: import("..").ConstraintHandler<"int", number, readonly [DDataParser.DataParserCheckerInt]>;
export type Int = Constraint<typeof Int>;
export declare const Positive: import("..").ConstraintHandler<"positive", number, readonly [DDataParser.DataParserCheckerNumberMin]>;
export type Positive = Constraint<typeof Positive>;
export declare const Negative: import("..").ConstraintHandler<"negative", number, readonly [DDataParser.DataParserCheckerNumberMax]>;
export type Negative = Constraint<typeof Negative>;
