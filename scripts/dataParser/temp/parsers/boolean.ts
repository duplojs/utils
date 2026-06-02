import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../base";
import { addIssue, type DataParserError, type SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type DataParserBooleanCheckers = GetEligibleChecker<boolean>;

export interface DataParserDefinitionBoolean extends DataParserDefinition<
	DataParserBooleanCheckers
> {
	readonly coerce: boolean;
}

export const booleanKind = createDataParserKind("boolean");

export class DataParserBoolean<
	GenericDefinition extends DataParserDefinitionBoolean = DataParserDefinitionBoolean,
> extends DataParserBase.init(
		booleanKind,
	)<
		GenericDefinition,
		boolean,
		boolean
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserBoolean);
	}

	protected dataParserIsAsynchronous() {
		return false;
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
	) => DataParserBoolean<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static execParse(
		self: DataParserBoolean,
		data: unknown,
		error: DataParserError,
	): boolean | typeof SymbolDataParserError {
		if (typeof data === "boolean") {
			return data;
		} else if (self.definition.coerce) {
			if (typeof data === "string") {
				const lower = data.trim().toLowerCase();
				if (lower === "true" || lower === "false") {
					return lower === "true";
				}
			} else if (typeof data === "number" && (data === 0 || data === 1)) {
				return data === 1;
			}
		}

		return addIssue(error, "boolean", data, self.definition.errorMessage);
	}

	public static create<
		const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionBoolean> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<DataParserDefinitionBoolean>,
			GenericDefinition
		>,
	): DataParserBoolean<
			MergeDefinition<
				DataParserDefinitionBoolean,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserBoolean({
			...definition,
			coerce: definition?.coerce ?? false,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}

export const boolean = DataParserBoolean.create;
