import { type Time } from "../../base";
import { type TheTime } from "../../../../date";
export declare function timeLessThan(threshold: Time | TheTime): (primitive: Time) => boolean;
export declare function timeLessThan(primitive: Time, threshold: Time | TheTime): boolean;
