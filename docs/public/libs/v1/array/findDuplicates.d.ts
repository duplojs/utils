import { type AnyTuple } from "../common";
import * as DDate from "../date";
export type EligibleDuplicateElement = (string | boolean | null | number | bigint | undefined | DDate.TheDate | DDate.TheTime);
export declare function findDuplicates<GenericInput extends readonly EligibleDuplicateElement[]>(array: GenericInput): undefined | AnyTuple<GenericInput[number]>;
