import { type Kind, type NeverCoalescing } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Input, type Output, SymbolDataParserError } from "../base";
import { type DataParsers, type MergeDefinition } from "@scripts/dataParser/types";
import { type DataParserError, type SymbolDataParserErrorIssue, SymbolDataParserErrorPromiseIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";

export interface DataParserDefinitionTransform extends DataParserDefinition<never> {
	readonly inner: DataParsers;
	theFunction(input: any, error: DataParserError): unknown;
}

export const dataParserTransformKind = createDataParserKind("transform");

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
	& Kind<typeof dataParserTransformKind.definition>
);

export interface DataParserTransform<
	GenericDefinition extends DataParserDefinitionTransform = DataParserDefinitionTransform,
> extends _DataParserTransform<GenericDefinition> {

}

export function transform<
	GenericDataParser extends DataParsers,
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
	return dataParserInit<DataParserTransform>(
		dataParserTransformKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				inner,
				theFunction,
			},
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
}
