import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Input, type Output, SymbolDataParserError, type DataParserChecker, type DataParserCheckerDefinition, type DataParser } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";

export type DataParserTransformCheckers<
	GenericInput extends unknown = unknown,
> = DataParserChecker<
	DataParserCheckerDefinition,
	GenericInput
>;

export interface DataParserDefinitionTransform<
	GenericInput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserTransformCheckers<GenericInput>
	> {
	readonly inner: DataParser;
	theFunction(input: any, error: DataParserError): unknown;
}

export const transformKind = createDataParserKind("transform");

export type DataParserTransformOutput<
	GenericTheFunction extends DataParserDefinitionTransform["theFunction"],
> = Exclude<
	Awaited<ReturnType<GenericTheFunction>>,
	| SymbolDataParserError
>;

type _DataParserTransform<
	GenericDefinition extends DataParserDefinitionTransform,
> = (
	& DataParserBase<
		GenericDefinition,
		DataParserTransformOutput<GenericDefinition["theFunction"]>,
		Input<GenericDefinition["inner"]>
	>
	& Kind<typeof transformKind.definition>
);

export interface DataParserTransform<
	GenericDefinition extends DataParserDefinitionTransform = DataParserDefinitionTransform,
> extends _DataParserTransform<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserTransformCheckers<Output<this>>,
			...DataParserTransformCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserTransformCheckers<Output<this>>,
				...DataParserTransformCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserTransform<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/transform/index.md}
 */
export function transform<
	GenericDataParser extends DataParser,
	GenericOutput extends unknown,
	const GenericDefinition extends Partial<
		Omit<
			DataParserDefinitionTransform<
				DataParserTransformOutput<() => GenericOutput>
			>,
			"inner" | "theFunction"
		>
	> = never,
>(
	inner: GenericDataParser,
	theFunction: (
		input: Output<GenericDataParser>,
		error: DataParserError
	) => GenericOutput,
	definition?: GenericDefinition,
): DataParserTransform<
		MergeDefinition<
			DataParserDefinitionTransform,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				theFunction(input: Output<GenericDataParser>): GenericOutput;
			}
		>
	> {
	const self = dataParserBaseInit<DataParserTransform>(
		transformKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			inner,
			theFunction,
		},
		{
			sync: (data, error, self) => {
				const innerResult = self.definition.inner.exec(data, error);

				if (innerResult === SymbolDataParserError) {
					return SymbolDataParserError;
				}

				const result = self.definition.theFunction(innerResult as never, error);

				if (result instanceof Promise) {
					return addIssue(error, "non-promise transform result", result, self.definition.errorMessage);
				}

				return result;
			},
			async: async(data, error, self) => {
				const innerResult = await self.definition.inner.asyncExec(data, error);

				if (innerResult === SymbolDataParserError) {
					return SymbolDataParserError;
				}

				let result: unknown = self.definition.theFunction(innerResult as never, error);

				if (result instanceof Promise) {
					result = await result.catch(
						() => addIssue(error, "successful async transform result", result, self.definition.errorMessage),
					);
				}

				return result as never;
			},
			isAsynchronous: (self) => self.definition.theFunction.constructor.name === "AsyncFunction",
		},
		transform.overrideHandler,
	) as never;

	return self as never;
}

transform.overrideHandler = createOverride<DataParserTransform>("@duplojs/utils/data-parser/transform");
