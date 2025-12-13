import { type Date } from "../../base";
import { type TheDate } from "../../../../date";
export declare function dateLessThan(threshold: Date | TheDate): (primitive: Date) => boolean;
export declare function dateLessThan(primitive: Date, threshold: Date | TheDate): boolean;
