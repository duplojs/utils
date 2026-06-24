import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../base";
import { addIssue, type DataParserError, type SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
import * as DDate from "@scripts/date";

export type DataParserDateCheckers = GetEligibleChecker<DDate.TheDate>;

export interface DataParserDefinitionDate extends DataParserDefinition<
	DataParserDateCheckers
> {
	readonly coerce: boolean;
}

export const dateKind = createDataParserKind("date");

export class DataParserDate<
	GenericDefinition extends DataParserDefinitionDate = DataParserDefinitionDate,
> extends DataParserBase.init(
		dateKind,
	)<
		GenericDefinition,
		DDate.TheDate,
		DDate.TheDate | Date | DDate.SerializedTheDate
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserDate);
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
	) => DataParserDate<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserDate,
		data: unknown,
		error: DataParserError,
	): DDate.TheDate | typeof SymbolDataParserError {
		if (self.definition.coerce) {
			if (typeof data === "number") {
				if (!DDate.isSafeTimestamp(data)) {
					return addIssue(error, "date", data, self.definition.errorMessage, self);
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
				return addIssue(error, "date", data, self.definition.errorMessage, self);
			}
			return DDate.TheDate.new(timestamp);
		}

		return addIssue(error, "date", data, self.definition.errorMessage, self);
	}

	public static override dataParserIsAsynchronous(self: DataParserDate) {
		return false;
	}

	public static override prepareDefinition(
		definition?: Partial<DataParserDefinitionDate>,
	): DataParserDefinitionDate {
		return {
			...definition,
			coerce: definition?.coerce ?? false,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/date/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionDate> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<DataParserDefinitionDate>,
			GenericDefinition
		>,
	): DataParserDate<
			MergeDefinition<
				DataParserDefinitionDate,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserDate(this.prepareDefinition(definition)) as never;
	}
}

/**
 * {@include dataParser/classic/date/index.md}
 */
export const date = detachObjectMethod(DataParserDate, "create");
