import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserCheckerBigIntMin, type DataParserCheckerBigIntMax } from "./checkers";
import { createDataParserKind } from "../../kind";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export * from "./checkers";

export interface DataParserBigIntCheckerCustom {}

export type DataParserBigIntCheckers = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserBigIntCheckerCustom[
		GetPropsWithValueExtends<
			DataParserBigIntCheckerCustom,
			DataParserChecker
		>
	]
	| DataParserCheckerBigIntMin
	| DataParserCheckerBigIntMax
	| CheckerRefineImplementation<bigint>
);

export interface DataParserDefinitionBigInt extends DataParserDefinition<
	DataParserBigIntCheckers
> {
	readonly coerce: boolean;
}

export const bigIntKind = createDataParserKind("bigint");

type _DataParserBigInt<
	GenericDefinition extends DataParserDefinitionBigInt,
> = (
	& DataParser<
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

	construct<
		const GenericDefinition extends DataParserDefinitionBigInt,
	>(
		definition: GenericDefinition
	): DataParserBigInt<
		MergeDefinition<
			DataParserDefinitionBigInt,
			GenericDefinition
		>
	>;
}

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
	const self = dataParserInit<DataParserBigInt>(
		bigIntKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
		},
		(data, _error, self) => {
			if (self.definition.coerce) {
				try {
					// eslint-disable-next-line no-param-reassign
					data = BigInt(data as never);
				} catch {}
			}

			if (typeof data === "bigint") {
				return data;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;

	return bigint.overrideHandler.apply(self) as never;
}

bigint.overrideHandler = createOverride<DataParserBigInt>("@duplojs/utils/data-parser/bigint");
