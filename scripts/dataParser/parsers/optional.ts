import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type IsEqual, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export interface DataParserOptionalCheckerCustom<
	GenericInput extends unknown = unknown,
> {}

export type DataParserOptionalCheckers<
	GenericInput extends unknown = unknown,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserOptionalCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserOptionalCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionOptional<
	GenericCoalescingValue extends unknown = unknown,
> extends DataParserDefinition<
		DataParserOptionalCheckers
	> {
	readonly inner: DataParser;
	readonly coalescingValue: GenericCoalescingValue;
}

export const optionalKind = createDataParserKind("optional");

type _DataParserOptional<
	GenericDefinition extends DataParserDefinitionOptional,
> = (
	& DataParser<
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

	construct<
		const GenericDefinition extends DataParserDefinitionOptional,
	>(
		definition: GenericDefinition
	): DataParserOptional<
		MergeDefinition<
			DataParserDefinitionOptional,
			GenericDefinition
		>
	>;
}

export function optional<
	GenericDataParser extends DataParser,
	const GenericDefinition extends Partial<
		Omit<
			DataParserDefinitionOptional<
				Output<GenericDataParser> | undefined
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
	const self = dataParserInit<DataParserOptional>(
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
		},
	) as never;

	return optional.overrideHandler.apply(self) as never;
}

optional.overrideHandler = createOverride<DataParserOptional>("@duplojs/utils/data-parser/optional");
