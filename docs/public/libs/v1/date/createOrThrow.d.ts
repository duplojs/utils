import type { TheDate } from "./types";
declare const CreateTheDateError_base: new (params: {
    "@DuplojsUtilsError/create-the-date-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../common").Kind<import("../common").KindDefinition<"create-the-date-error", unknown>, unknown> & import("../common").Kind<import("../common").KindDefinition<"@DuplojsUtilsError/create-the-date-error", unknown>, unknown>;
export declare class CreateTheDateError extends CreateTheDateError_base {
    input: TheDate | Date | number;
    constructor(input: TheDate | Date | number);
}
export declare function createOrThrow<GenericInput extends TheDate | Date | number>(input: GenericInput): `date${number}-` | `date${number}+`;
export {};
