import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type DataParserChecker, type DataParserCheckerDefinition } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../kind";

export * from "./checkers";

export type DataParserBigIntCheckers = DataParserChecker<
	DataParserCheckerDefinition,
	bigint
>;

export interface DataParserDefinitionBigInt extends DataParserDefinition<
	DataParserBigIntCheckers
> {
	readonly coerce: boolean;
}

export const bigIntKind = createDataParserKind("bigint");

type _DataParserBigInt<
	GenericDefinition extends DataParserDefinitionBigInt,
> = (
	& DataParserBase<
		GenericDefinition,
		bigint,
		bigint
	>
	& Kind<typeof bigIntKind.definition>
);

export interface DataParserBigInt<
	GenericDefinition extends DataParserDefinitionBigInt = DataParserDefinitionBigInt,
> extends _DataParserBigInt<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserBigIntCheckers,
			...DataParserBigIntCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserBigIntCheckers,
				...DataParserBigIntCheckers[],
			],
			GenericChecker
		>
	): DataParserBigInt<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/bigint/index.md}
 */
export function bigint<
	const GenericDefinition extends Partial<DataParserDefinitionBigInt> = never,
>(
	definition?: GenericDefinition,
): DataParserBigInt<
		MergeDefinition<
			DataParserDefinitionBigInt,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseInit<DataParserBigInt>(
		bigIntKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
		},
		(data, error, self) => {
			const inputData = data;
			if (self.definition.coerce) {
				try {
					// eslint-disable-next-line no-param-reassign
					data = BigInt(data as never);
				} catch {}
			}

			if (typeof data === "bigint") {
				return data;
			}

			return addIssue(error, "bigint", inputData, self.definition.errorMessage);
		},
		bigint.overrideHandler,
	) as never;

	return self as never;
}

bigint.overrideHandler = createOverride<DataParserBigInt>("@duplojs/utils/data-parser/bigint");
