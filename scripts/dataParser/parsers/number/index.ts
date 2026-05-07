import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../kind";

export * from "./checkers";

export type DataParserNumberCheckers = GetEligibleChecker<number>;

export interface DataParserDefinitionNumber extends DataParserDefinition<
	DataParserNumberCheckers
> {
	readonly coerce: boolean;
}

export const numberKind = createDataParserKind("number");

type _DataParserNumber<
	GenericDefinition extends DataParserDefinitionNumber,
> = (
	& DataParserBase<
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
	const self = dataParserBaseInit<DataParserNumber>(
		numberKind,
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
					data = Number(data);
				} catch {}
			}

			if (typeof data === "number" && !Number.isNaN(data)) {
				return data;
			}

			return addIssue(error, "number", inputData, self.definition.errorMessage);
		},
		number.overrideHandler,
	) as never;

	return self as never;
}

number.overrideHandler = createOverride<DataParserNumber>("@duplojs/utils/data-parser/number");
