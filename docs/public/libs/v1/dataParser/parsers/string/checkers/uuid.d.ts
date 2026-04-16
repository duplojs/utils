import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../../dataParser/base";
export interface DataParserCheckerDefinitionUuid extends DataParserCheckerDefinition {
    regex: RegExp;
}
export declare const checkerUuidKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-uuid", unknown>>;
type _DataParserCheckerUuid = (Kind<typeof checkerUuidKind.definition> & DataParserChecker<DataParserCheckerDefinitionUuid, string>);
export interface DataParserCheckerUuid extends _DataParserCheckerUuid {
}
export declare function checkerUuid(definition?: Partial<Omit<DataParserCheckerDefinitionUuid, "regex">>): DataParserCheckerUuid;
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
