import * as DCommon from "../common";
import { type SymbolDataParserError, type DataParserError } from "./error";
import { type DataParser } from "./base";
import { type DataParserCheckerBaseInit } from "./types";
export declare const checkerKind: DCommon.KindHandler<DCommon.KindDefinition<"@DuplojsUtilsDataParser/checker", unknown>>;
export interface DataParserCheckerDefinition {
    readonly errorMessage?: string;
}
declare const DataParserCheckerBase_base: new <GenericParentInstance extends never = never, GenericKindValue extends unknown = unknown>(kindValue: GenericKindValue) => DCommon.NeverCoalescing<GenericParentInstance, {}> & DCommon.Kind<DCommon.KindDefinition<"@DuplojsUtilsDataParser/checker", unknown>, GenericKindValue>;
export declare abstract class DataParserCheckerBase<GenericDefinition extends DataParserCheckerDefinition = DataParserCheckerDefinition, GenericInput extends unknown = unknown> extends DataParserCheckerBase_base {
    readonly definition: GenericDefinition;
    constructor(definition: GenericDefinition);
    abstract get classConstructor(): (DCommon.AnyConstructor<[any], DataParserCheckerBase<any>> & {
        create(...args: never[]): DataParserCheckerBase<any>;
        execCheck(data: GenericInput, error: DataParserError, self: DataParserCheckerBase<any>, dataParser: DataParser): unknown;
    });
    private execCheck;
    exec<GenericOutput extends GenericInput>(data: GenericInput, error: DataParserError, dataParser: DataParser): DCommon.MaybePromise<GenericOutput | SymbolDataParserError>;
    /**
     * The clone() method creates a new data parser checker instance with the same definition.
     * 
     * **Supported call styles:**
     * - Method: `checker.clone()` -> returns a new checker
     * 
     * The original checker is not mutated, and the clone can be configured independently.
     * 
     * ```ts
     * const checker = DP.checkerStringMin(3, {
     * 	errorMessage: "string.too-short",
     * });
     * 
     * const clone = checker.clone();
     * 
     * const parser = DP.string()
     * 	.addChecker(clone);
     * 
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser
     * 
     * @namespace DP
     * 
     */
    clone(): this;
    /**
     * The setErrorMessage() method sets the checker error message on the current checker.
     * 
     * **Supported call styles:**
     * - Method: `checker.setErrorMessage(errorMessage)` -> returns the same checker
     * 
     * This method mutates the checker definition and affects errors emitted after it is called. Prefer `addErrorMessage()` when you need an immutable update.
     * 
     * ```ts
     * const checker = DP.checkerStringMin(3);
     * 
     * checker.setErrorMessage("string.too-short");
     * 
     * const parser = DP.string()
     * 	.addChecker(checker);
     * 
     * const result = parser.parse("id");
     * 
     * const sameChecker = checker.setErrorMessage("string.min");
     * 
     * ```
     * 
     * @deprecated This method mutates the data parser checker.
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser
     * 
     * @namespace DP
     * 
     */
    setErrorMessage(errorMessage: string): this;
    /**
     * The addErrorMessage() method returns a new data parser checker with a custom error message.
     * 
     * **Supported call styles:**
     * - Method: `checker.addErrorMessage(errorMessage)` -> returns a new checker
     * 
     * The original checker is not mutated. The returned checker uses the message for checker errors, overriding the parser fallback message.
     * 
     * ```ts
     * const checker = DP.checkerStringMin(3);
     * 
     * const withMessage = checker.addErrorMessage("string.too-short");
     * 
     * const parser = DP.string()
     * 	.addChecker(withMessage);
     * 
     * const result = parser.parse("id");
     * 
     * const originalParser = DP.string().addChecker(checker);
     * 
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/dataParser
     * 
     * @namespace DP
     * 
     */
    addErrorMessage(errorMessage: string): this;
    abstract isAsynchronous(): boolean;
    static create: (...args: never[]) => unknown;
    static execCheck: (data: any, error: DataParserError, self: any, dataParser: DataParser) => unknown;
    static init<GenericKindHandler extends DCommon.KindHandler>(kindHandler: GenericKindHandler): DataParserCheckerBaseInit<GenericKindHandler>;
}
export interface DataParserChecker<GenericInput extends unknown = unknown> extends DataParserCheckerBase<DataParserCheckerDefinition, GenericInput> {
}
export {};
