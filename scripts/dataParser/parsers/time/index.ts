import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride, unwrap } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker, type DataParserCheckerDefinition } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../kind";
import * as DDate from "@scripts/date";
import * as DEither from "@scripts/either";

export * from "./checkers";

export type DataParserTimeCheckers = DataParserChecker<
	DataParserCheckerDefinition,
	DDate.TheTime
>;

export interface DataParserDefinitionTime extends DataParserDefinition<
	DataParserTimeCheckers
> {
	readonly coerce: boolean;
}

export const timeKind = createDataParserKind("time");

type _DataParserTime<
	GenericDefinition extends DataParserDefinitionTime,
> = (
	& DataParser<
		GenericDefinition,
		DDate.TheTime,
		DDate.TheTime | number | DDate.SerializedTheTime
	>
	& Kind<typeof timeKind.definition>
);

export interface DataParserTime<
	GenericDefinition extends DataParserDefinitionTime = DataParserDefinitionTime,
> extends _DataParserTime<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserTimeCheckers,
			...DataParserTimeCheckers[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserTimeCheckers,
				...DataParserTimeCheckers[],
			],
			GenericChecker
		>
	): DataParserTime<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/time/index.md}
 */
export function time<
	const GenericDefinition extends Partial<DataParserDefinitionTime> = never,
>(
	definition?: GenericDefinition,
): DataParserTime<
		MergeDefinition<
			DataParserDefinitionTime,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserInit<DataParserTime>(
		timeKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			coerce: definition?.coerce ?? false,
		},
		(data, error, self) => {
			if (self.definition.coerce) {
				if (typeof data === "string" && DDate.isoTimeRegex.test(data)) {
					const result = DDate.createTime({ value: data });

					if (DEither.isLeft(result)) {
						return addIssue(error, "time", data, self.definition.errorMessage);
					}

					return unwrap(result);
				}
			}

			if (data instanceof DDate.TheTime) {
				return data;
			} else if (typeof data === "string" && DDate.isSerializedTheTime(data)) {
				return DDate.TheTime.new(DDate.toTimeValue(data));
			} else if (typeof data === "number") {
				if (!DDate.isSafeTimeValue(data)) {
					return addIssue(error, "time", data, self.definition.errorMessage);
				}

				return DDate.TheTime.new(data);
			}

			return addIssue(error, "time", data, self.definition.errorMessage);
		},
		time.overrideHandler,
	) as never;

	return self as never;
}

time.overrideHandler = createOverride<DataParserTime>("@duplojs/utils/data-parser/time");
