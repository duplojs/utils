import { type Constraint } from "../base";
import * as DDataParser from "../../../dataParser";
export declare const Email: import("..").ConstraintHandler<"email", string, readonly [DDataParser.DataParserCheckerEmail]>;
export type Email = Constraint<typeof Email>;
export declare const Url: import("..").ConstraintHandler<"url", string, readonly [DDataParser.DataParserCheckerUrl]>;
export type Url = Constraint<typeof Url>;
