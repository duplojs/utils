import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type IsEqual, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type Input, type DataParser } from "../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";

export type DataParserOptionalCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput | undefined>;

export interface DataParserDefinitionOptional<
	GenericOutput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserOptionalCheckers<GenericOutput>
	> {
	readonly inner: DataParser;
	readonly coalescingValue: GenericOutput;
}

export const optionalKind = createDataParserKind("optional");

type _DataParserOptional<
	GenericDefinition extends DataParserDefinitionOptional,
> = (
	& DataParserBase<
		GenericDefinition,
		IsEqual<
			GenericDefinition["coalescingValue"],
			unknown
		> extends true
			? Output<GenericDefinition["inner"]> | undefined
			: Output<GenericDefinition["inner"]>,
		Input<GenericDefinition["inner"]> | undefined
	>
	& Kind<typeof optionalKind.definition>
);

export interface DataParserOptional<
	GenericDefinition extends DataParserDefinitionOptional = DataParserDefinitionOptional,
> extends _DataParserOptional<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserOptionalCheckers<Output<this>>,
			...DataParserOptionalCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserOptionalCheckers<Output<this>>,
				...DataParserOptionalCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserOptional<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/optional/index.md}
 */
export function optional<
	GenericDataParser extends DataParser,
	const GenericDefinition extends Partial<
		Omit<
			DataParserDefinitionOptional<
				Output<GenericDataParser>
			>,
			"inner"
		>
	> = never,
>(
	inner: GenericDataParser,
	definition?: GenericDefinition,
): DataParserOptional<
		MergeDefinition<
			DataParserDefinitionOptional,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
		>
	> {
	const self = dataParserBaseInit<DataParserOptional>(
		optionalKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			inner,
			coalescingValue: definition?.coalescingValue,
		},
		{
			sync: (data, error, self) => {
				if (data === undefined) {
					return self.definition.coalescingValue;
				}

				return self.definition.inner.exec(data, error);
			},
			async: async(data, error, self) => {
				if (data === undefined) {
					return self.definition.coalescingValue;
				}

				return self.definition.inner.asyncExec(data, error);
			},
			isAsynchronous: (self) => self.definition.inner.isAsynchronous(),
		},
		optional.overrideHandler,
	) as never;

	return self as never;
}

optional.overrideHandler = createOverride<DataParserOptional>("@duplojs/utils/data-parser/optional");
