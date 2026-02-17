import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output } from "../base";
type _DataParserStringExtended<GenericDefinition extends dataParsers.DataParserDefinitionString> = (Kind<typeof dataParsers.stringKind.definition> & DataParserExtended<GenericDefinition, Output<dataParsers.DataParserString<GenericDefinition>>, Input<dataParsers.DataParserString<GenericDefinition>>>);
export interface DataParserStringExtended<GenericDefinition extends dataParsers.DataParserDefinitionString = dataParsers.DataParserDefinitionString> extends _DataParserStringExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserStringCheckers,
        ...dataParsers.DataParserStringCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserStringCheckers,
        ...dataParsers.DataParserStringCheckers[]
    ], GenericChecker>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
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
    regex(regex: RegExp, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionStringRegex, "regex">>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.DataParserCheckerStringRegex]>>;
}
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
export declare function string<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionString> = never>(definition?: GenericDefinition): DataParserStringExtended<MergeDefinition<dataParsers.DataParserDefinitionString, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace string {
    var overrideHandler: import("../../common").OverrideHandler<DataParserStringExtended<dataParsers.DataParserDefinitionString>>;
}
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
export declare function email(definition?: Partial<dataParsers.DataParserCheckerDefinitionEmail>): DataParserStringExtended<{
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
export {};
