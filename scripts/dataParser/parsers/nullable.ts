import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";

export type DataParserNullableCheckers<
	GenericInput extends unknown = unknown,
> = (
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionNullable extends DataParserDefinition<DataParserNullableCheckers> {
	readonly inner: DataParser;
}

export const nullableKind = createDataParserKind("nullable");

type _DataParserNullable<
	GenericDefinition extends DataParserDefinitionNullable,
> = (
	& DataParser<
		GenericDefinition,
		Output<GenericDefinition["inner"]> | null,
		Input<GenericDefinition["inner"]> | null
	>
	& Kind<typeof nullableKind.definition>
);

export interface DataParserNullable<
	GenericDefinition extends DataParserDefinitionNullable = DataParserDefinitionNullable,
> extends _DataParserNullable<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserNullableCheckers<Output<this>>,
			...DataParserNullableCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserNullableCheckers<Output<this>>,
				...DataParserNullableCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserNullable<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

export function nullable<
	GenericDataParser extends DataParser,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionNullable, "inner">
	> = never,
>(
	inner: GenericDataParser,
	definition?: GenericDefinition,
): DataParserNullable<
		MergeDefinition<
			DataParserDefinitionNullable,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
		>
	> {
	return dataParserInit<DataParserNullable>(
		nullableKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				inner,
			},
		},
		{
			sync: (data, error, self) => {
				if (data === null) {
					return data;
				}

				return self.definition.inner.exec(data, error);
			},
			async: async(data, error, self) => {
				if (data === null) {
					return data;
				}

				return self.definition.inner.asyncExec(data, error);
			},
		},
	) as never;
}
