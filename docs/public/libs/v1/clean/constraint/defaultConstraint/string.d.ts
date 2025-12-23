import { type GetConstraint } from "../base";
import * as DDataParser from "../../../dataParser";
export declare const Email: import("..").ConstraintHandler<"email", string, readonly [DDataParser.DataParserCheckerEmail]>;
export type Email = GetConstraint<typeof Email>;
export declare const Url: import("..").ConstraintHandler<"url", string, readonly [DDataParser.DataParserCheckerUrl]>;
export type Url = GetConstraint<typeof Url>;
