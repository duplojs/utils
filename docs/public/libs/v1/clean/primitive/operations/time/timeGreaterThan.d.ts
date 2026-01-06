import { type Time } from "../../base";
import { type TheTime } from "../../../../date";
export declare function timeGreaterThan(threshold: Time | TheTime): (primitive: Time) => boolean;
export declare function timeGreaterThan(primitive: Time, threshold: Time | TheTime): boolean;
