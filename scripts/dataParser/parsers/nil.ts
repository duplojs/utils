import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../base";
import { addIssue, type DataParserError, type SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type DataParserNilCheckers = GetEligibleChecker<null>;

export interface DataParserDefinitionNil extends DataParserDefinition<
	DataParserNilCheckers
> {
	readonly coerce: boolean;
}

export const nilKind = createDataParserKind("nil");

export class DataParserNil<
	GenericDefinition extends DataParserDefinitionNil = DataParserDefinitionNil,
> extends DataParserBase.init(
		nilKind,
	)<
		GenericDefinition,
		null,
		null
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserNil);
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
	) => DataParserNil<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserNil,
		data: unknown,
		error: DataParserError,
	): null | typeof SymbolDataParserError {
		if (data === null) {
			return data;
		} else if (self.definition.coerce && data === "null") {
			return null;
		}

		return addIssue(error, "null", data, self.definition.errorMessage);
	}

	public static override dataParserIsAsynchronous(self: DataParserNil) {
		return false;
	}

	public static override prepareDefinition(
		definition?: Partial<DataParserDefinitionNil>,
	): DataParserDefinitionNil {
		return {
			...definition,
			coerce: definition?.coerce ?? false,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/nil/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionNil> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<DataParserDefinitionNil>,
			GenericDefinition
		>,
	): DataParserNil<
			MergeDefinition<
				DataParserDefinitionNil,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserNil(this.prepareDefinition(definition)) as never;
	}
}

export const nil = DataParserNil.create;
