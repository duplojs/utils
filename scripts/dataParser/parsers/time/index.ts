import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride, unwrap } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type DataParserChecker } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../kind";
import * as DDate from "@scripts/date";
import * as DEither from "@scripts/either";

export * from "./checkers";

export type DataParserTimeCheckers = GetEligibleChecker<DDate.TheTime>;

export interface DataParserDefinitionTime extends DataParserDefinition<
	DataParserTimeCheckers
> {
	readonly coerce: boolean;
}

export const timeKind = createDataParserKind("time");

type _DataParserTime<
	GenericDefinition extends DataParserDefinitionTime,
> = (
	& DataParserBase<
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
	const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionTime> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<DataParserDefinitionTime>,
		GenericDefinition
	>,
): DataParserTime<
		MergeDefinition<
			DataParserDefinitionTime,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseInit<DataParserTime>(
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
