import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionUuid extends DataParserCheckerDefinition {
    regex: RegExp;
}
export declare const checkerUuidKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-uuid", unknown>>;
declare const DataParserCheckerUuid_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-uuid", unknown>>>;
export declare class DataParserCheckerUuid extends DataParserCheckerUuid_base<DataParserCheckerDefinitionUuid, string> {
    get classConstructor(): typeof DataParserCheckerUuid & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(data: string, error: DataParserError, self: DataParserCheckerUuid, dataParser: DataParser): string | typeof import("../../../../dataParser/error").SymbolDataParserError;
    static create(definition?: Partial<Omit<DataParserCheckerDefinitionUuid, "regex">>): DataParserCheckerUuid;
}
export declare const checkerUuid: typeof DataParserCheckerUuid.create;
/**
 * Creates a string parser specialized for UUID values.
 * 
 * **Supported call styles:**
 * - Function: `uuid(definition?)` -> `DataParserString`
 * 
 * This is a shorthand for `string({ checkers: [checkerUuid(...)] })`.
 * 
 * ```ts
 * const parser = DP.uuid();
 * 
 * const valid = parser.parse("8e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b");
 * // valid: Error<DP.DataParserError> | Success<string>
 * 
 * const invalid = parser.parse("invalid-value");
 * // invalid: Error<DP.DataParserError> | Success<string>
 * 
 * const withMessage = DP.uuid({ errorMessage: "string.uuid" });
 * withMessage.parse("8e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b");
 * ```
 * 
 * @remarks
 * - The checker contract is output-based: checker compatibility is determined by the parser output type.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/string
 * 
 * @namespace DP
 * 
 */
export declare function uuid(definition?: Partial<Omit<DataParserCheckerDefinitionUuid, "regex">>): import("..").DataParserString<{
    readonly checkers: readonly [DataParserCheckerUuid];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
