import { createKind, type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserCheckerInt, type DataParserCheckerNumberMin, type DataParserCheckerNumberMax } from "./checkers";

export * from "./checkers";

export type DataParserNumberCheckers = (
	| DataParserCheckerInt
	| DataParserCheckerNumberMin
	| DataParserCheckerNumberMax
);

export interface DataParserDefinitionNumber extends DataParserDefinition<
	DataParserNumberCheckers
> {
	readonly coerce: boolean;
}

export const dataParserNumberKind = createKind("data-parser-number");

type _DataParserNumber<
	GenericDefinition extends DataParserDefinitionNumber,
> = (
	& DataParser<
		GenericDefinition,
		number,
		number
	>
	& Kind<typeof dataParserNumberKind.definition>
);

export interface DataParserNumber<
	GenericDefinition extends DataParserDefinitionNumber = DataParserDefinitionNumber,
> extends _DataParserNumber<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserNumberCheckers,
			...DataParserNumberCheckers[],
		],
	>(
		...args: GenericChecker
	): DataParserNumber<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

export function number<
	const GenericDefinition extends Partial<DataParserDefinitionNumber> = never,
>(
	definition?: GenericDefinition,
): DataParserNumber<
		MergeDefinition<
			DataParserDefinitionNumber,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	return dataParserInit<DataParserNumber>(
		dataParserNumberKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				coerce: definition?.coerce ?? false,
			},
		},
		(data, _error, self) => {
			if (self.definition.coerce) {
				try {
					// eslint-disable-next-line no-param-reassign
					data = Number(data);
				} catch {}
			}

			if (typeof data === "number" && !Number.isNaN(data)) {
				return data;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;
}
