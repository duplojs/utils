import * as DDataParser from "../dataParser";
import { type ConstraintHandler, type ConstraintsSetHandler, type GetConstraint, type GetConstraints } from "./constraint";
import { type GetNewType, type NewTypeHandler } from "./newType";
import { type PrimitiveHandler } from "./primitive";
type ToMapDataParserInput = NewTypeHandler<any, any, readonly any[], any> | ConstraintHandler<any, any, readonly any[], any> | ConstraintsSetHandler<any, readonly any[], any> | PrimitiveHandler;
type OutputDataParser<GenericInput extends ToMapDataParserInput> = GenericInput extends NewTypeHandler<any, any, readonly any[], any> ? GetNewType<GenericInput> : GenericInput extends ConstraintHandler<any, any, readonly any[], any> ? GetConstraint<GenericInput> : GenericInput extends ConstraintsSetHandler<any, readonly any[], any> ? GetConstraints<GenericInput> : GenericInput extends PrimitiveHandler ? ReturnType<GenericInput["createWithUnknownOrThrow"]> : never;
interface ToMapDataParserParams {
    coerce?: boolean;
}
/**
 * Creates a DataParser that maps Clean handlers or primitives into a wrapped value object.
 * 
 * **Supported call styles:**
 * - Classic: `toMapDataParser(handler, params?)` -> returns a DataParser
 * - Pipe: `pipe(handler, toMapDataParser)` -> returns a DataParser
 * 
 * The resulting parser preserves kind tags (`newTypeKind`, `constrainedTypeKind`) and stores the parsed value under the wrapped value key. When `coerce` is enabled, compatible primitive parsers will coerce inputs before validation.
 * 
 * ```ts
 * const ShortLabel = C.createNewType(
 * 	"ShortLabel",
 * 	DP.string(),
 * 	[C.StringMax(5)],
 * );
 * 
 * const labelParser = C.toMapDataParser(ShortLabel);
 * labelParser.parseOrThrow("hello");
 * 
 * const userIdParser = pipe(
 * 	C.Number,
 * 	C.toMapDataParser,
 * );
 * userIdParser.parseOrThrow(42);
 * 
 * const coerceParser = C.toMapDataParser(
 * 	C.String,
 * 	{ coerce: true },
 * );
 * coerceParser.parseOrThrow(123);
 * 
 * ```
 * 
 * @remarks
 * - Supported inputs: `NewTypeHandler`, `ConstraintHandler`, `ConstraintsSetHandler`, and `PrimitiveHandler`.
 * - Use `coerce: true` to allow conversions (e.g. number to string) on compatible parsers.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/toMapDataParser
 * 
 * @namespace C
 * 
 */
export declare function toMapDataParser<GenericInput extends ToMapDataParserInput, GenericInputDataParser extends unknown = unknown>(input: GenericInput, params?: ToMapDataParserParams): DDataParser.Contract<OutputDataParser<GenericInput>, GenericInputDataParser>;
export {};
