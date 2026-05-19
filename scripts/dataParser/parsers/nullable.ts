import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type IsEqual, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type Input, type DataParser, type DataParserChecker } from "../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";

export type DataParserNullableCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput | null>;

export interface DataParserDefinitionNullable<
	GenericOutput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserNullableCheckers<GenericOutput>
	> {
	readonly inner: DataParser;
	readonly coalescingValue: GenericOutput;
}

export const nullableKind = createDataParserKind("nullable");

type _DataParserNullable<
	GenericDefinition extends DataParserDefinitionNullable,
> = (
	& DataParserBase<
		GenericDefinition,
		IsEqual<
			GenericDefinition["coalescingValue"],
			unknown
		> extends true
			? Output<GenericDefinition["inner"]> | null
			: Output<GenericDefinition["inner"]>,
		Input<GenericDefinition["inner"]> | null
	>
	& Kind<typeof nullableKind.definition>
);

export interface DataParserNullable<
	GenericDefinition extends DataParserDefinitionNullable = DataParserDefinitionNullable,
> extends _DataParserNullable<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
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

/**
 * {@include dataParser/classic/nullable/index.md}
 */
export function nullable<
	GenericDataParser extends DataParser,
	const GenericDefinition extends PrepareDataParserDefinition<
		DataParserDefinitionNullable<
			Output<GenericDataParser>
		>,
		"inner"
	> = never,
>(
	inner: GenericDataParser,
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			DataParserDefinitionNullable<
				Output<GenericDataParser>
			>,
			"inner"
		>,
		GenericDefinition
	>,
): DataParserNullable<
		MergeDefinition<
			DataParserDefinitionNullable,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
		>
	> {
	const self = dataParserBaseInit<DataParserNullable>(
		nullableKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			inner,
			coalescingValue: definition?.coalescingValue ?? null,
		},
		{
			sync: (data, error, self) => {
				if (data === null) {
					return self.definition.coalescingValue;
				}

				return self.definition.inner.exec(data, error);
			},
			async: async(data, error, self) => {
				if (data === null) {
					return self.definition.coalescingValue;
				}

				return self.definition.inner.asyncExec(data, error);
			},
			isAsynchronous: (self) => self.definition.inner.isAsynchronous(),
		},
		nullable.overrideHandler,
	) as never;

	return self as never;
}

nullable.overrideHandler = createOverride<DataParserNullable>("@duplojs/utils/data-parser/nullable");
