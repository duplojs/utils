import type { TheDate } from "./types";
import { type SpoolingDate } from "./types/spoolingDate";
declare const CreateTheDateError_base: new (params: {
    "@DuplojsUtilsError/create-the-date-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("../common").Kind<import("../common").KindDefinition<"create-the-date-error", unknown>, unknown> & import("../common").Kind<import("../common").KindDefinition<"@DuplojsUtilsError/create-the-date-error", unknown>, unknown>;
export declare class CreateTheDateError extends CreateTheDateError_base {
    input: string | Date | number | SpoolingDate;
    constructor(input: string | Date | number | SpoolingDate);
}
export declare function createOrThrow<GenericInput extends TheDate | Date | number>(input: GenericInput): TheDate;
export declare function createOrThrow<GenericInput extends SpoolingDate>(input: GenericInput): TheDate;
export {};
