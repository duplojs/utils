import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserStringExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserString>;
export declare class DataParserStringExtended<GenericDefinition extends dataParsers.DataParserDefinitionString = dataParsers.DataParserDefinitionString> extends DataParserStringExtended_base<GenericDefinition, Output<dataParsers.DataParserString<GenericDefinition>>, Input<dataParsers.DataParserString<GenericDefinition>>> {
    get classConstructor(): typeof DataParserStringExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Adds a minimum length checker to a string parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.min(min, definition?)` -> returns a string parser
     * 
     * Ensures the string length is at least the given minimum.
     * 
     * ```ts
     * const parser = DPE.string().min(3);
     * const result = parser.parse("abc");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string
     * }
     * 
     * const withMessage = DPE.string().min(5, { errorMessage: "string.too-short" });
     * const messageResult = withMessage.parse("hello");
     * 
     * const chained = DPE.string().min(2).max(5);
     * const chainedResult = chained.parse("abcd");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/string
     * 
     * @namespace DPE
     * 
     */
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionStringMin, "min">>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerStringMin]>>;
    /**
     * Adds a maximum length checker to a string parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.max(max, definition?)` -> returns a string parser
     * 
     * Ensures the string length is at most the given maximum.
     * 
     * ```ts
     * const parser = DPE.string().max(5);
     * const result = parser.parse("short");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string
     * }
     * 
     * const withMessage = DPE.string().max(10, { errorMessage: "string.too-long" });
     * const messageResult = withMessage.parse("hello");
     * 
     * const chained = DPE.string().min(2).max(4);
     * const chainedResult = chained.parse("abcd");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/string
     * 
     * @namespace DPE
     * 
     */
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionStringMax, "max">>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerStringMax]>>;
    /**
     * Adds a regex checker to a string parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.regex(regex, definition?)` -> returns a string parser
     * 
     * Ensures the string matches the provided regular expression.
     * 
     * ```ts
     * const parser = DPE.string().regex(/^[A-Z][a-z]+$/);
     * const result = parser.parse("Duplo");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string
     * }
     * 
     * const withMessage = DPE.string().regex(/^[a-z-]+$/, { errorMessage: "string.bad-format" });
     * const messageResult = withMessage.parse("slug-value");
     * 
     * const chained = DPE.string().min(2).regex(/^ab/);
     * const chainedResult = chained.parse("ab");
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/string
     * 
     * @namespace DPE
     * 
     */
    regex(regex: RegExp, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRegex, "regex">>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerRegex]>>;
    /**
     * Creates an extended data parser for strings.
     * 
     * **Supported call styles:**
     * - Method: `DPE.string(definition?)` -> returns a string parser
     * 
     * Validates that the input is a string and exposes string-specific methods like min, max, and regex.
     * 
     * ```ts
     * const parser = DPE.string().min(3).max(10);
     * const result = parser.parse("DuploJS");
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: string
     * }
     * 
     * const withRegex = DPE.string().regex(/^[A-Z][a-z]+$/);
     * const regexResult = withRegex.parse("Duplo");
     * 
     * const coerceParser = DPE.coerce.string().min(2);
     * const coerceResult = coerceParser.parse(123);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/string
     * 
     * @namespace DPE
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionString> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionString>, GenericDefinition>): DataParserStringExtended<MergeDefinition<dataParsers.DataParserDefinitionString, NeverCoalescing<GenericDefinition, {}>>>;
}
export declare const string: typeof DataParserStringExtended.create;
/**
 * Creates an extended data parser for email strings.
 * 
 * **Supported call styles:**
 * - Method: `DPE.email(definition?)` -> returns an email parser
 * 
 * Validates that the input is a string formatted as an email address.
 * 
 * ```ts
 * const parser = DPE.email();
 * const result = parser.parse("a@b.com");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string
 * }
 * 
 * const withMessage = DPE.email({ errorMessage: "email.format-invalid" });
 * const messageResult = withMessage.parse("a@b.com");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/string
 * 
 * @namespace DPE
 * 
 */
export declare function email(definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionEmail, "regex">>): DataParserStringExtended<{
    readonly checkers: readonly [dataParsers.DataParserCheckerEmail];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
/**
 * Creates an extended data parser for URL strings.
 * 
 * **Supported call styles:**
 * - Method: `DPE.url(definition?)` -> returns a URL parser
 * 
 * Validates that the input is a string formatted as a URL.
 * 
 * ```ts
 * const parser = DPE.url();
 * const result = parser.parse("https://example.com");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string
 * }
 * 
 * const withMessage = DPE.url({ errorMessage: "url.format-invalid" });
 * const messageResult = withMessage.parse("https://example.com");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/string
 * 
 * @namespace DPE
 * 
 */
export declare function url(definition?: Partial<dataParsers.DataParserCheckerDefinitionUrl>): DataParserStringExtended<{
    readonly checkers: readonly [dataParsers.DataParserCheckerUrl];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
/**
 * Creates an extended data parser for UUID strings.
 * 
 * **Supported call styles:**
 * - Method: `DPE.uuid(definition?)` -> returns a UUID parser
 * 
 * Validates that the input is a string formatted as a UUID.
 * 
 * ```ts
 * const parser = DPE.uuid();
 * const result = parser.parse("8e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string
 * }
 * 
 * const withMessage = DPE.uuid({ errorMessage: "string.uuid" });
 * const messageResult = withMessage.parse("invalid-value");
 * ```
 * 
 * @remarks
 * - `DPE.uuid()` is a convenience wrapper around `DPE.string({ checkers: [checkerUuid(...)] })`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/string
 * 
 * @namespace DPE
 * 
 */
export declare function uuid(definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionUuid, "regex">>): DataParserStringExtended<{
    readonly checkers: readonly [dataParsers.DataParserCheckerUuid];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
