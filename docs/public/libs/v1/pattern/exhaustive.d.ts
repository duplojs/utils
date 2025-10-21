import { type Unwrap } from "../common";
import { type PatternResult } from "./result";
export declare function exhaustive<const GenericValue extends unknown, GenericResult extends PatternResult<GenericValue>>(result: GenericResult): Unwrap<GenericResult>;
