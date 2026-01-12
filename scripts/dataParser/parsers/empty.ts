import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export interface DataParserEmptyCheckerCustom {}

export type DataParserEmptyCheckers = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserEmptyCheckerCustom[
		GetPropsWithValueExtends<
			DataParserEmptyCheckerCustom,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<undefined>
);

export interface DataParserDefinitionEmpty extends DataParserDefinition<
	DataParserEmptyCheckers
> {
	readonly coerce: boolean;
}

export const emptyKind = createDataParserKind("empty");

type _DataParserEmpty<
	GenericDefinition extends DataParserDefinitionEmpty,
> = (
	& DataParser<
		GenericDefinition,
		undefined,
		undefined
	>
	& Kind<typeof emptyKind.definition>
);

export interface DataParserEmpty<
	GenericDefinition extends DataParserDefinitionEmpty = DataParserDefinitionEmpty,
> extends _DataParserEmpty<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserEmptyCheckers,
			...DataParserEmptyCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserEmptyCheckers,
				...DataParserEmptyCheckers[],
			],
			GenericChecker
		>
	): DataParserEmpty<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	/**
	 * @deprecated Method with unreliable typing.
	 */
	construct<
		const GenericDefinition extends DataParserDefinitionEmpty,
	>(
		definition: GenericDefinition
	): DataParserEmpty<
		MergeDefinition<
			DataParserDefinitionEmpty,
			GenericDefinition
		>
	>;
}

/**
 * {@include dataParser/classic/empty/index.md}
 */
export function empty<
	const GenericDefinition extends Partial<DataParserDefinitionEmpty> = never,
>(
	definition?: GenericDefinition,
): DataParserEmpty<
		MergeDefinition<
			DataParserDefinitionEmpty,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserInit<DataParserEmpty>(
		emptyKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
		},
		(data, _error, self) => {
			if (data === undefined) {
				return data;
			} else if (self.definition.coerce && data === "undefined") {
				return undefined;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;

	return empty.overrideHandler.apply(self) as never;
}

empty.overrideHandler = createOverride<DataParserEmpty>("@duplojs/utils/data-parser/empty");
