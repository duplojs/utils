import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserBigIntExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserBigInt>;
export declare class DataParserBigIntExtended<GenericDefinition extends dataParsers.DataParserDefinitionBigInt = dataParsers.DataParserDefinitionBigInt> extends DataParserBigIntExtended_base<GenericDefinition, Output<dataParsers.DataParserBigInt<GenericDefinition>>, Input<dataParsers.DataParserBigInt<GenericDefinition>>> {
    get classConstructor(): typeof DataParserBigIntExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserBigIntExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserBigIntExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
    /**
     * Adds a minimum value checker to a bigint parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.min(min, definition?)` -> returns a bigint parser
     * 
     * Ensures the bigint is at least the given minimum.
     * 
     * ```ts
     * const parser = DPE.bigint().min(1n);
     * const result = parser.parse(5n);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: bigint
     * }
     * 
     * const withMessage = DPE.bigint().min(10n, { errorMessage: "bigint.too-small" });
     * const messageResult = withMessage.parse(10n);
     * 
     * const chained = DPE.bigint().min(1n).max(5n);
     * const chainedResult = chained.parse(3n);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/bigint
     * 
     * @namespace DPE
     * 
     */
    min(min: bigint, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionBigIntMin, "min">>): DataParserBigIntExtended<import("../../common").SimplifyTopLevel<Omit<GenericDefinition, "checkers"> & {
        readonly checkers: readonly [...GenericDefinition["checkers"], dataParsers.DataParserCheckerBigIntMin];
    }>>;
    /**
     * Adds a maximum value checker to a bigint parser.
     * 
     * **Supported call styles:**
     * - Method: `dataParser.max(max, definition?)` -> returns a bigint parser
     * 
     * Ensures the bigint is at most the given maximum.
     * 
     * ```ts
     * const parser = DPE.bigint().max(10n);
     * const result = parser.parse(5n);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: bigint
     * }
     * 
     * const withMessage = DPE.bigint().max(100n, { errorMessage: "bigint.too-large" });
     * const messageResult = withMessage.parse(100n);
     * 
     * const chained = DPE.bigint().min(1n).max(5n);
     * const chainedResult = chained.parse(2n);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/bigint
     * 
     * @namespace DPE
     * 
     */
    max(max: bigint, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionBigIntMax, "max">>): DataParserBigIntExtended<import("../../common").SimplifyTopLevel<Omit<GenericDefinition, "checkers"> & {
        readonly checkers: readonly [...GenericDefinition["checkers"], dataParsers.DataParserCheckerBigIntMax];
    }>>;
    /**
     * Creates an extended data parser for bigint values.
     * 
     * **Supported call styles:**
     * - Method: `DPE.bigint(definition?)` -> returns a bigint parser
     * 
     * Validates bigint values and exposes bigint-specific methods like min and max.
     * 
     * ```ts
     * const parser = DPE.bigint().min(1n).max(10n);
     * const result = parser.parse(5n);
     * if (E.isRight(result)) {
     * 	const value = unwrap(result);
     * 	// value: bigint
     * }
     * 
     * const coerceParser = DPE.coerce.bigint();
     * const coerceResult = coerceParser.parse("42");
     * 
     * const onlySmall = DPE.bigint().max(3n);
     * const smallResult = onlySmall.parse(2n);
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser/bigint
     * 
     * @namespace DPE
     * 
     */
    static create<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionBigInt> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionBigInt>, GenericDefinition>): DataParserBigIntExtended<MergeDefinition<dataParsers.DataParserDefinitionBigInt, NeverCoalescing<GenericDefinition, {}>>>;
}
/**
 * Creates an extended data parser for bigint values.
 * 
 * **Supported call styles:**
 * - Method: `DPE.bigint(definition?)` -> returns a bigint parser
 * 
 * Validates bigint values and exposes bigint-specific methods like min and max.
 * 
 * ```ts
 * const parser = DPE.bigint().min(1n).max(10n);
 * const result = parser.parse(5n);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: bigint
 * }
 * 
 * const coerceParser = DPE.coerce.bigint();
 * const coerceResult = coerceParser.parse("42");
 * 
 * const onlySmall = DPE.bigint().max(3n);
 * const smallResult = onlySmall.parse(2n);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/bigint
 * 
 * @namespace DPE
 * 
 */
export declare const bigint: typeof DataParserBigIntExtended.create;
export {};
