import { type Date } from "../../base";
import { type TheDate } from "../../../../date";
export declare function dateGreaterThan(threshold: Date | TheDate): (primitive: Date) => boolean;
export declare function dateGreaterThan(primitive: Date, threshold: Date | TheDate): boolean;
