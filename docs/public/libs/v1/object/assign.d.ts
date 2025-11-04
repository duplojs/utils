import { type AnyObject } from "../common/types/anyObject";
import { type AssignObjects } from "./types";
export declare function assign<GenericInput extends object, GenericValue extends Partial<Record<keyof GenericInput, unknown>> & AnyObject>(value: GenericValue): (input: GenericInput) => AssignObjects<GenericInput, GenericValue>;
export declare function assign<GenericInput extends object, GenericValue extends Partial<Record<keyof GenericInput, unknown>> & AnyObject>(input: GenericInput, value: GenericValue): AssignObjects<GenericInput, GenericValue>;
