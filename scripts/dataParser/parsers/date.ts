import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type DataParserChecker, type DataParserCheckerDefinition } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import * as DDate from "@scripts/date";

export type DataParserDateCheckers = DataParserChecker<
	DataParserCheckerDefinition,
	DDate.TheDate
>;

export interface DataParserDefinitionDate extends DataParserDefinition<
	DataParserDateCheckers
> {
	readonly coerce: boolean;
}

export const dateKind = createDataParserKind("date");

type _DataParserDate<
	GenericDefinition extends DataParserDefinitionDate,
> = (
	& DataParserBase<
		GenericDefinition,
		DDate.TheDate,
		DDate.TheDate | Date | DDate.SerializedTheDate
	>
	& Kind<typeof dateKind.definition>
);

export interface DataParserDate<
	GenericDefinition extends DataParserDefinitionDate = DataParserDefinitionDate,
> extends _DataParserDate<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserDateCheckers,
			...DataParserDateCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserDateCheckers,
				...DataParserDateCheckers[],
			],
			GenericChecker
		>
	): DataParserDate<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/date/index.md}
 */
export function date<
	const GenericDefinition extends Partial<DataParserDefinitionDate> = never,
>(
	definition?: GenericDefinition,
): DataParserDate<
		MergeDefinition<
			DataParserDefinitionDate,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseInit<DataParserDate>(
		dateKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
		},
		(data, error, self) => {
			if (self.definition.coerce) {
				if (typeof data === "number") {
					if (!DDate.isSafeTimestamp(data)) {
						return addIssue(error, "date", data, self.definition.errorMessage);
					}

					return DDate.TheDate.new(data);
				}

				if (typeof data === "string") {
					const date = new Date(data);
					const timestamp = date.getTime();
					if (DDate.isSafeTimestamp(timestamp)) {
						return DDate.TheDate.new(timestamp);
					}
				}
			}

			if (data instanceof DDate.TheDate) {
				return data;
			} else if (typeof data === "string" && DDate.isSerializedTheDate(data)) {
				return DDate.TheDate.new(DDate.toTimestamp(data));
			} else if (data instanceof Date) {
				const timestamp = data.getTime();

				if (!DDate.isSafeTimestamp(timestamp)) {
					return addIssue(error, "date", data, self.definition.errorMessage);
				}
				return DDate.TheDate.new(timestamp);
			}

			return addIssue(error, "date", data, self.definition.errorMessage);
		},
		date.overrideHandler,
	) as never;

	return self as never;
}

date.overrideHandler = createOverride<DataParserDate>("@duplojs/utils/data-parser/date");
