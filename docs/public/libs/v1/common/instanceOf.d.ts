import { type AnyConstructor } from "./types";
export declare function instanceOf<GenericInput extends unknown, GenericConstructor extends AnyConstructor>(constructor: GenericConstructor | GenericConstructor[]): (input: GenericInput) => input is Extract<GenericInput, InstanceType<GenericConstructor>>;
export declare function instanceOf<GenericInput extends unknown, GenericConstructor extends AnyConstructor>(input: GenericInput, constructor: GenericConstructor | GenericConstructor[]): input is Extract<GenericInput, InstanceType<GenericConstructor>>;
