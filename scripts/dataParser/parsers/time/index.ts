import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../kind";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "@scripts/object";
import { type TheTime } from "@scripts/date";
import * as DDate from "@scripts/date";
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
	| CheckerRefineImplementation<TheTime>
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
		TheTime,
		TheTime
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

	/**
	 * @deprecated Method with unreliable typing.
	 */
	construct<
		const GenericDefinition extends DataParserDefinitionTime,
	>(
		definition: GenericDefinition
	): DataParserTime<
		MergeDefinition<
			DataParserDefinitionTime,
			GenericDefinition
		>
	>;
}

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
				if (typeof data === "number") {
					if (!DDate.isSafeTimestamp(data)) {
						return SymbolDataParserErrorIssue;
					}

					return DDate.createTheTime(data);
				}

				if (typeof data === "string" && DDate.isoTimeRegex.test(data)) {
					return DDate.createTime({ value: data });
				}
			}

			if (typeof data === "string" && DDate.isTime(data)) {
				return data;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;

	return time.overrideHandler.apply(self) as never;
}

time.overrideHandler = createOverride<DataParserTime>("@duplojs/utils/data-parser/time");
