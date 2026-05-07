import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type Input, SymbolDataParserError, type DataParser } from "../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";

export type DataParserRecoverCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionRecover<
	GenericInput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserRecoverCheckers<GenericInput>
	> {
	readonly inner: DataParser;
	readonly recoveredValue: unknown;
}

export const recoverKind = createDataParserKind("recover");

type _DataParserRecover<
	GenericDefinition extends DataParserDefinitionRecover,
> = (
	& DataParserBase<
		GenericDefinition,
		GenericDefinition["recoveredValue"],
		Input<GenericDefinition["inner"]>
	>
	& Kind<typeof recoverKind.definition>
);

export interface DataParserRecover<
	GenericDefinition extends DataParserDefinitionRecover = DataParserDefinitionRecover,
> extends _DataParserRecover<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserRecoverCheckers<Output<this>>,
			...DataParserRecoverCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserRecoverCheckers<Output<this>>,
				...DataParserRecoverCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserRecover<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/recover/index.md}
 */
export function recover<
	GenericDataParser extends DataParser,
	GenericRecoveredValue extends Output<GenericDataParser>,
	const GenericDefinition extends Partial<
		Omit<
			DataParserDefinitionRecover<
				Output<GenericDataParser>
			>,
			"inner" | "recoveredValue"
		>
	> = never,
>(
	inner: GenericDataParser,
	recoveredValue: GenericRecoveredValue,
	definition?: GenericDefinition,
): DataParserRecover<
		MergeDefinition<
			DataParserDefinitionRecover,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				recoveredValue: GenericRecoveredValue;
			}
		>
	> {
	const self = dataParserBaseInit<DataParserRecover>(
		recoverKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			inner,
			recoveredValue,
		},
		{
			sync: (data, error, self) => {
				const result = self.definition.inner.exec(data, error);

				return result === SymbolDataParserError
					? self.definition.recoveredValue
					: result;
			},
			async: async(data, error, self) => {
				const result = await self.definition.inner.asyncExec(data, error);

				return result === SymbolDataParserError
					? self.definition.recoveredValue
					: result;
			},
			isAsynchronous: (self) => self.definition.inner.isAsynchronous(),
		},
		recover.overrideHandler,
	) as never;

	return self as never;
}

recover.overrideHandler = createOverride<DataParserRecover>("@duplojs/utils/data-parser/recover");
