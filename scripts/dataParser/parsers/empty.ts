import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type DataParserChecker } from "../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";

export type DataParserEmptyCheckers = GetEligibleChecker<undefined>;

export interface DataParserDefinitionEmpty extends DataParserDefinition<
	DataParserEmptyCheckers
> {
	readonly coerce: boolean;
}

export const emptyKind = createDataParserKind("empty");

type _DataParserEmpty<
	GenericDefinition extends DataParserDefinitionEmpty,
> = (
	& DataParserBase<
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
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserEmpty<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/empty/index.md}
 */
export function empty<
	const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionEmpty> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<DataParserDefinitionEmpty>,
		GenericDefinition
	>,
): DataParserEmpty<
		MergeDefinition<
			DataParserDefinitionEmpty,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseInit<DataParserEmpty>(
		emptyKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
		},
		(data, error, self) => {
			if (data === undefined) {
				return data;
			} else if (self.definition.coerce && data === "undefined") {
				return undefined;
			}

			return addIssue(error, "undefined", data, self.definition.errorMessage);
		},
		empty.overrideHandler,
	) as never;

	return self as never;
}

empty.overrideHandler = createOverride<DataParserEmpty>("@duplojs/utils/data-parser/empty");
