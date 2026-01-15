import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type IsEqual, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export interface DataParserNullableCheckerCustom<
	GenericInput extends unknown = unknown,
> {}

export type DataParserNullableCheckers<
	GenericInput extends unknown = unknown,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserNullableCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserNullableCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionNullable<
	GenericCoalescingValue extends unknown = unknown,
> extends DataParserDefinition<
		DataParserNullableCheckers
	> {
	readonly inner: DataParser;
	readonly coalescingValue: GenericCoalescingValue;
}

export const nullableKind = createDataParserKind("nullable");

type _DataParserNullable<
	GenericDefinition extends DataParserDefinitionNullable,
> = (
	& DataParser<
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

/**
 * {@include dataParser/classic/nullable/index.md}
 */
export function nullable<
	GenericDataParser extends DataParser,
	const GenericDefinition extends Partial<
		Omit<
			DataParserDefinitionNullable<
				Output<GenericDataParser>
			>,
			"inner"
		>
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
	const self = dataParserInit<DataParserNullable>(
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
		},
		nullable.overrideHandler,
	) as never;

	return self as never;
}

nullable.overrideHandler = createOverride<DataParserNullable>("@duplojs/utils/data-parser/nullable");
