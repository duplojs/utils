/**
 * Date utilities for immutable, type-safe date manipulation. Functions preserve the
 * original value and return new values.
 * 
 * This namespace introduces a dedicated `TheDate` (`date{number}{'-'|'+'}`) type, different from the native `Date`.
 * It is universal and exchange-friendly, based on UTC timestamps to avoid timezone pitfalls.
 * Conversion helpers let you move between `TheDate` and other date formats when needed.
 * 
 * **How to import:**
 * - From the main entry (namespace style)
 * - Via direct import for tree-shaking
 * 
 * ```ts
 * import { DDate, D } from "@duplojs/utils";
 * import * as DDate from "@duplojs/utils/date";
 * import * as D from "@duplojs/utils/date";
 * ```
 * 
 * What you will find in this namespace:
 * - creation and conversion (`D.create`, `D.createOrThrow`, `D.toNative`, `D.toTimestamp`, `D.toISOString`)
 * - relative dates (`D.now`, `D.today`, `D.yesterday`, `D.tomorrow`)
 * - formatting and timezone (`D.format`, `D.timezone`, `D.applyTimezone`, `D.getTimezoneOffset`)
 * - collections and ordering (`D.min`, `D.max`, `D.sort`, `D.closestTo`)
 * - iteration and rounding (`D.each`, `D.round`)
 * - checks (`D.is`, `D.isSafeTimestamp`)
 * - constants and types (`D.constants`, `D.types`)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date
 * 
 * @namespace D
 * 
 */
export * from "./types";
export * from "./constants";
export * from "./create";
export * from "./now";
export * from "./today";
export * from "./yesterday";
export * from "./tomorrow";
export * from "./toNative";
export * from "./toTimestamp";
export * from "./toTimeValue";
export * from "./getters";
export * from "./toISOString";
export * from "./operators";
export * from "./closestTo";
export * from "./each";
export * from "./each";
export * from "./createOrThrow";
export * from "./round";
export * from "./isSafeTimestamp";
export * from "./isSafeTimeValue";
export * from "./min";
export * from "./minTime";
export * from "./max";
export * from "./maxTime";
export * from "./sort";
export * from "./sortTimes";
export * from "./is";
export * from "./isTime";
export * from "./timezone";
export * from "./getTimezoneOffset";
export * from "./applyTimezone";
export * from "./format";
export * from "./makeSafeTimestamp";
export * from "./createTheDate";
export * from "./createTheTime";
export * from "./createTime";
export * from "./createTimeOrThrow";
export * from "./makeSafeTimeValue";
