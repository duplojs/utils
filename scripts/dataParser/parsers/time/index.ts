import { type FixDeepFunctionInfer, type NeverCoalescing, unwrap } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../../base";
import { addIssue, type DataParserError, type SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";
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

export class DataParserTime<
	GenericDefinition extends DataParserDefinitionTime = DataParserDefinitionTime,
> extends DataParserBase.init(
		timeKind,
	)<
		GenericDefinition,
		DDate.TheTime,
		DDate.TheTime | number | DDate.SerializedTheTime
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserTime);
	}

	public declare addChecker: <
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
	) => DataParserTime<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserTime,
		data: unknown,
		error: DataParserError,
	): (
			| DDate.TheTime
			| typeof SymbolDataParserError
		) {
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
	}

	public static override dataParserIsAsynchronous(self: DataParserTime) {
		return false;
	}

	public static override prepareDefinition(
		definition?: Partial<DataParserDefinitionTime>,
	): DataParserDefinitionTime {
		return {
			...definition,
			coerce: definition?.coerce ?? false,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	public static override create<
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
		return new DataParserTime(this.prepareDefinition(definition)) as never;
	}
}

export const time = DataParserTime.create;
