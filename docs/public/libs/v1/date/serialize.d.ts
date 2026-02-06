import { TheDate } from "./theDate";
import type { TheTime } from "./theTime";
import type { SerializedTheTime } from "./types";
import { type SerializedTheDate } from "./types/serializedTheDate";
/**
 * Serializes immutable date values into their string literal formats.
 * 
 * Supported call styles:
 * - Classic: `serialize(input)` where `input` is `TheDate` or `TheTime`
 * - Curried: not supported
 * 
 * `TheDate` values are serialized to `SerializedTheDate` (`date${number}${"+" | "-"}`), and `TheTime` values are serialized to `SerializedTheTime` (`time${number}${"+" | "-"}`).
 * 
 * ```ts
 * const inputDate = D.create("2024-06-20");
 * const resultDate = D.serialize(inputDate);
 * // resultDate: SerializedTheDate
 * 
 * const inputTime = D.createTime(4, "day");
 * const resultTime = D.serialize(inputTime);
 * // resultTime: SerializedTheTime
 * 
 * const resultDate2 = D.serialize(
 * 	D.create("2025-10-20"),
 * );
 * // resultDate2: SerializedTheDate
 * 
 * ```
 * 
 * @remarks
 * - This function is the string bridge between immutable classes (`TheDate`, `TheTime`) and serialized literal types (`SerializedTheDate`, `SerializedTheTime`).
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/serialize
 * @see https://utils.duplojs.dev/en/v1/api/date/theDate
 * @see https://utils.duplojs.dev/en/v1/api/date/theTime
 * 
 * @namespace D
 * 
 */
export declare function serialize(input: TheDate): SerializedTheDate;
export declare function serialize(input: TheTime): SerializedTheTime;
