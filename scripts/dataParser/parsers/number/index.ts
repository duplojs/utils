import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserCheckerInt, type DataParserCheckerNumberMin, type DataParserCheckerNumberMax } from "./checkers";
import { createDataParserKind } from "../../kind";
import { type CheckerRefineImplementation } from "../refine";

export * from "./checkers";

export type DataParserNumberCheckers = (
	| DataParserCheckerInt
	| DataParserCheckerNumberMin
	| DataParserCheckerNumberMax
	| CheckerRefineImplementation<number>
);

export interface DataParserDefinitionNumber extends DataParserDefinition<
	DataParserNumberCheckers
> {
	readonly coerce: boolean;
}

export const numberKind = createDataParserKind("number");

type _DataParserNumber<
	GenericDefinition extends DataParserDefinitionNumber,
> = (
	& DataParser<
		GenericDefinition,
		number,
		number
	>
	& Kind<typeof numberKind.definition>
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
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserNumberCheckers,
				...DataParserNumberCheckers[],
			],
			GenericChecker
		>
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
		numberKind,
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
