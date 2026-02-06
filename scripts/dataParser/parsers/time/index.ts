import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride, unwrap } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../kind";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "@scripts/object";
import * as DDate from "@scripts/date";
import * as DEither from "@scripts/either";
import { type DataParserCheckerTimeMax, type DataParserCheckerTimeMin } from "./checkers";

export * from "./checkers";

export interface DataParserTimeCheckerCustom {}

export type DataParserTimeCheckers = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserTimeCheckerCustom[
		GetPropsWithValueExtends<
			DataParserTimeCheckerCustom,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<DDate.TheTime>
	| DataParserCheckerTimeMax
	| DataParserCheckerTimeMin
);

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
		(data, _error, self) => {
			if (self.definition.coerce) {
				if (typeof data === "string" && DDate.isoTimeRegex.test(data)) {
					const result = DDate.createTime({ value: data });

					if (DEither.isLeft(result)) {
						return SymbolDataParserErrorIssue;
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
					return SymbolDataParserErrorIssue;
				}

				return DDate.TheTime.new(data);
			}

			return SymbolDataParserErrorIssue;
		},
		time.overrideHandler,
	) as never;

	return self as never;
}

time.overrideHandler = createOverride<DataParserTime>("@duplojs/utils/data-parser/time");
