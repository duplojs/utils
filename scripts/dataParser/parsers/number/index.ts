import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserCheckerInt, type DataParserCheckerNumberMin, type DataParserCheckerNumberMax } from "./checkers";
import { createDataParserKind } from "../../kind";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export * from "./checkers";

export interface DataParserNumberCheckerCustom {}

export type DataParserNumberCheckers = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserNumberCheckerCustom[
		GetPropsWithValueExtends<
			DataParserNumberCheckerCustom,
			DataParserChecker
		>
	]
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

/**
 * {@include dataParser/classic/number/index.md}
 */
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
	const self = dataParserInit<DataParserNumber>(
		numberKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
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
		number.overrideHandler,
	) as never;

	return self as never;
}

number.overrideHandler = createOverride<DataParserNumber>("@duplojs/utils/data-parser/number");
