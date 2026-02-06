import type { SerializedTheDate } from "./types/serializedTheDate";
declare const TheDate_base: new (params: {
    "@DuplojsUtilsDate/the-date"?: unknown;
}, parentParams: readonly [value: string | number | Date]) => Date & import("../common/kind").Kind<import("../common/kind").KindDefinition<"the-date", unknown>, unknown> & import("../common/kind").Kind<import("../common/kind").KindDefinition<"@DuplojsUtilsDate/the-date", unknown>, unknown>;
/**
 * Represents an immutable date-time object (`TheDate`) based on UTC.
 * 
 * Signature: `TheDate` → immutable class extending `Date`
 * 
 * `TheDate` solves two recurring problems: accidental mutation of native `Date`, and ambiguity between object dates and transport formats. You manipulate a stable object in code, and serialize it explicitly when you need to cross process boundaries.
 * 
 * ```ts
 * const theDate = D.create("2025-10-20");
 * // theDate: TheDate
 * 
 * const timestamp = theDate.getTime();
 * // timestamp: number
 * 
 * const nativeDate = theDate.toNative();
 * // nativeDate: Date
 * 
 * const serialized = D.serialize(theDate);
 * // serialized: SerializedTheDate
 * 
 * const yearInParis = D.getYear(theDate, "Europe/Paris");
 * // yearInParis: number
 * 
 * const datePlusOneDay = D.addDays(theDate, 1);
 * // datePlusOneDay: TheDate
 * 
 * const iso = D.toISOString(theDate);
 * // iso: string
 * 
 * ```
 * 
 * @remarks
 * - `TheDate` is immutable: mutation methods from `Date` are intentionally disabled.
 * - Use `D.serialize(theDate)` to convert to `SerializedTheDate`.
 * - Use `D.create(...)` / `D.createOrThrow(...)` to construct instances.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/theDate
 * @see https://utils.duplojs.dev/en/v1/api/date/serialize
 * @see https://utils.duplojs.dev/en/v1/api/date/create
 * 
 * @namespace D
 * 
 */
export declare class TheDate extends TheDate_base {
    private constructor();
    toNative(): Date;
    toString(): SerializedTheDate;
    toJSON(): SerializedTheDate;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setDate(_date: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setFullYear(_year: number, _month?: number, _date?: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setHours(_hours: number, _min?: number, _sec?: number, _ms?: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setMilliseconds(_ms: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setMinutes(_min: number, _sec?: number, _ms?: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setMonth(_month: number, _date?: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setSeconds(_sec: number, _ms?: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setTime(_time: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCDate(_date: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCFullYear(_year: number, _month?: number, _date?: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCHours(_hours: number, _min?: number, _sec?: number, _ms?: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCMilliseconds(_ms: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCMinutes(_min: number, _sec?: number, _ms?: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCMonth(_month: number, _date?: number): number;
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCSeconds(_sec: number, _ms?: number): number;
}
export {};
