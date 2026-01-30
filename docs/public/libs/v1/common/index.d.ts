/**
 * Cross-cutting utilities to compose functions, handle promises, manipulate wrappers/kinds, and apply runtime conversions shared by the whole library.
 * 
 * **How to import:**
 * - From the main entry (namespace style or direct named imports)
 * - Via direct import for tree-shaking
 * 
 * ```ts
 * import { pipe, when, clone } from "@duplojs/utils";
 * import * as DCommon from "@duplojs/utils/common";
 * import { pipe, when, clone } from "@duplojs/utils/common";
 * ```
 * 
 * What you will find in this namespace:
 * - composition helpers (`pipe`, `innerPipe`, `asyncPipe`, `asyncInnerPipe`, `forward`)
 * - predicates and guards (`when`, `whenNot`, `whenElse`, `and`, `or`, `isType`, `asserts`, `instanceOf`)
 * - control flow (`loop`, `asyncLoop`, `asyncRetry`, `sleep`, `memo`)
 * - promise utilities (`externalPromise`, `promiseObject`)
 * - string and value conversions (`toString`, `stringToMillisecond`, `stringToBytes`, `escapeRegExp`)
 * - wrappers and kinds (`wrapValue`, `unwrap`, `toWrappedValue`, `hasKinds`, `hasSomeKinds`)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common
 * 
 */
export * from "./types";
export * from "./addWrappedProperties";
export * from "./asyncPipe";
export * from "./clone";
export * from "./enum";
export * from "./escapeRegExp";
export * from "./externalPromise";
export * from "./interpolation";
export * from "./kind";
export * from "./pipe";
export * from "./promiseObject";
export * from "./simpleClone";
export * from "./sleep";
export * from "./stringToBytes";
export * from "./mimeType";
export * from "./stringToMillisecond";
export * from "./toJSON";
export * from "./toTransform";
export * from "./toWrappedValue";
export * from "./unwrap";
export * from "./unwrapGroup";
export * from "./asyncLoop";
export * from "./asyncRetry";
export * from "./wrapValue";
export * from "./toString";
export * from "./innerPipe";
export * from "./asyncInnerPipe";
export * from "./loop";
export * from "./forward";
export * from "./when";
export * from "./whenNot";
export * from "./equal";
export * from "./isType";
export * from "./and";
export * from "./or";
export * from "./whenElse";
export * from "./justReturn";
export * from "./memo";
export * from "./memoPromise";
export * from "./instanceOf";
export * from "./globalStore";
export * from "./builder";
export * from "./createKindIdentifier";
export * from "./forwardLog";
export * from "./override";
export * from "./errorKindNamespace";
export * from "./truthy";
export * from "./falsy";
export * from "./hasSomeKinds";
export * from "./hasKinds";
export * from "./toCurriedPredicate";
export * from "./pipeCall";
export * from "./asserts";
export * from "./path";
