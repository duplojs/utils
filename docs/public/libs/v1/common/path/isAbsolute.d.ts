import type { IsStringLiteral } from "../types";
type ComputeResult<GenericPath extends string> = IsStringLiteral<GenericPath> extends false ? GenericPath : Extract<GenericPath, `/${string}` | `\\${string}` | `${string}:${"/" | "\\"}${string}`>;
export declare function isAbsolute<GenericPath extends string>(path: GenericPath): path is ComputeResult<GenericPath>;
export {};
