/**
 * Number utilities for immutable, type-safe numeric operations. Functions are designed
 * for functional composition and do not mutate inputs.
 * 
 * **How to import:**
 * - From the main entry (namespace style)
 * - Via direct import for tree-shaking
 * 
 * ```ts
 * import { DNumber, N } from "@duplojs/utils";
 * import * as DNumber from "@duplojs/utils/number";
 * import * as N from "@duplojs/utils/number";
 * ```
 * 
 * What you will find in this namespace:
 * - arithmetic (`N.add`, `N.subtract`, `N.multiply`, `N.divide`)
 * - comparisons (`N.greater`, `N.less`, `N.between`)
 * - rounding (`N.floor`, `N.ceil`, `N.round`, `N.trunc`)
 * - math utilities (`N.min`, `N.max`, `N.sqrt`, `N.power`)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/number
 * 
 * @namespace N
 * 
 */
export * from "./abs";
export * from "./acos";
export * from "./add";
export * from "./asin";
export * from "./atan";
export * from "./atan2";
export * from "./ceil";
export * from "./clamp";
export * from "./cos";
export * from "./divide";
export * from "./floor";
export * from "./max";
export * from "./min";
export * from "./modulo";
export * from "./multiply";
export * from "./negate";
export * from "./power";
export * from "./round";
export * from "./sin";
export * from "./subtract";
export * from "./tan";
export * from "./trunc";
export * from "./greater";
export * from "./less";
export * from "./greaterThan";
export * from "./lessThan";
export * from "./toFixed";
export * from "./sqrt";
export * from "./types";
export * from "./between";
export * from "./betweenThan";
export * from "./sort";
