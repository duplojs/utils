/**
 * Array utilities for immutable, type-safe array manipulation. All functions preserve the
 * original array and return a new value.
 * 
 * **How to import:**
 * - From the main entry (namespace style)
 * - Via direct import for tree-shaking
 * 
 * ```ts
 * import { DArray, A } from "@duplojs/utils";
 * import * as DArray from "@duplojs/utils/array";
 * import * as A from "@duplojs/utils/array";
 * ```
 * 
 * What you will find in this namespace:
 * - element access helpers (`A.at`, `A.first`, `A.last`)
 * - search and predicates (`A.find`, `A.findIndex`, `A.some`, `A.every`)
 * - transforms (`A.map`, `A.flatMap`, `A.select`, `A.group`)
 * - structure updates (`A.set`, `A.insert`, `A.push`, `A.unshift`)
 * - slicing and composition (`A.slice`, `A.concat`, `A.chunk`, `A.copyWithin`)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array
 * 
 */
export * from "./types";
export * from "./filter";
export * from "./find";
export * from "./findLast";
export * from "./group";
export * from "./includes";
export * from "./map";
export * from "./maxElements";
export * from "./maxOf";
export * from "./minElements";
export * from "./minOf";
export * from "./push";
export * from "./reduce";
export * from "./some";
export * from "./sort";
export * from "./splice";
export * from "./is";
export * from "./at";
export * from "./findIndex";
export * from "./findLastIndex";
export * from "./flat";
export * from "./reverse";
export * from "./join";
export * from "./from";
export * from "./flatMap";
export * from "./shift";
export * from "./unshift";
export * from "./pop";
export * from "./reduceRight";
export * from "./every";
export * from "./lastIndexOf";
export * from "./indexOf";
export * from "./slice";
export * from "./fill";
export * from "./set";
export * from "./concat";
export * from "./copyWithin";
export * from "./findAndReplace";
export * from "./findAndSplice";
export * from "./sum";
export * from "./length";
export * from "./coalescing";
export * from "./toTuple";
export * from "./notIncludes";
export * from "./chunk";
export * from "./insert";
export * from "./isLastIndex";
export * from "./select";
export * from "./lengthEqual";
