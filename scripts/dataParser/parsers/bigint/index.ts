import { createKind, type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserCheckerBigIntMin, type DataParserCheckerBigIntMax } from "./checkers";

export * from "./checkers";

export type DataParserBigIntCheckers = (
	| DataParserCheckerBigIntMin
	| DataParserCheckerBigIntMax
);

export interface DataParserDefinitionBigInt extends DataParserDefinition<
	DataParserBigIntCheckers
> {
	coerce: boolean;
}

export const dataParserBigIntKind = createKind("data-parser-bigint");

type _DataParserBigInt<
	GenericDefinition extends DataParserDefinitionBigInt,
> = (
	& DataParser<
		GenericDefinition,
		bigint,
		bigint
	>
	& Kind<typeof dataParserBigIntKind.definition>
);

export interface DataParserBigInt<
	GenericDefinition extends DataParserDefinitionBigInt = DataParserDefinitionBigInt,
> extends _DataParserBigInt<GenericDefinition> {
	addChecker<
		GenericChecker extends [DataParserBigIntCheckers, ...DataParserBigIntCheckers[]],
	>(
		...args: GenericChecker
	): DataParserBigInt<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
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
	const coerce = definition?.coerce ?? false;

	return dataParserInit<DataParserBigInt>(
		dataParserBigIntKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				coerce,
			},
		},
		(data) => {
			if (coerce) {
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
}
