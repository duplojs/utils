import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../base";
import { addIssue, type DataParserError, type SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type DataParserEmptyCheckers = GetEligibleChecker<undefined>;

export interface DataParserDefinitionEmpty extends DataParserDefinition<
	DataParserEmptyCheckers
> {
	readonly coerce: boolean;
}

export const emptyKind = createDataParserKind("empty");

export class DataParserEmpty<
	GenericDefinition extends DataParserDefinitionEmpty = DataParserDefinitionEmpty,
> extends DataParserBase.init(
		emptyKind,
	)<
		GenericDefinition,
		undefined,
		undefined
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserEmpty);
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
	) => DataParserEmpty<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static execParse(
		self: DataParserEmpty,
		data: unknown,
		error: DataParserError,
	): undefined | typeof SymbolDataParserError {
		if (data === undefined) {
			return data;
		} else if (self.definition.coerce && data === "undefined") {
			return undefined;
		}

		return addIssue(error, "undefined", data, self.definition.errorMessage);
	}

	public static create<
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
		return new DataParserEmpty({
			...definition,
			coerce: definition?.coerce ?? false,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}

export const empty = DataParserEmpty.create;
