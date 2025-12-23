import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Input, type Output, SymbolDataParserError, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { type DataParserError, type SymbolDataParserErrorIssue, SymbolDataParserErrorPromiseIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export interface DataParserTransformCheckerCustom<
	GenericInput extends unknown = unknown,
> {}

export type DataParserTransformCheckers<
	GenericInput extends unknown = unknown,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserTransformCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserTransformCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionTransform extends DataParserDefinition<
	DataParserTransformCheckers
> {
	readonly inner: DataParser;
	theFunction(input: any, error: DataParserError): unknown;
}

export const transformKind = createDataParserKind("transform");

type _DataParserTransform<
	GenericDefinition extends DataParserDefinitionTransform,
> = (
	& DataParser<
		GenericDefinition,
		Exclude<
			Awaited<ReturnType<GenericDefinition["theFunction"]>>,
			| SymbolDataParserError
			| SymbolDataParserErrorIssue
			| SymbolDataParserErrorPromiseIssue
		>,
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

	construct<
		const GenericDefinition extends DataParserDefinitionTransform,
	>(
		definition: GenericDefinition
	): DataParserTransform<
		MergeDefinition<
			DataParserDefinitionTransform,
			GenericDefinition
		>
	>;
}

export function transform<
	GenericDataParser extends DataParser,
	GenericOutput extends unknown,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionTransform, "inner" | "theFunction">
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
	const self = dataParserInit<DataParserTransform>(
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
					return SymbolDataParserErrorPromiseIssue;
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
					result = result.catch(() => SymbolDataParserErrorPromiseIssue);
				}

				return result as never;
			},
		},
	) as never;

	return transform.overrideHandler.apply(self) as never;
}

transform.overrideHandler = createOverride<DataParserTransform>("@duplojs/utils/data-parser/transform");
