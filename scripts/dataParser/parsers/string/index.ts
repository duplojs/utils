import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../../base";
import { addIssue, type DataParserError, type SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";

export * from "./checkers";

export type DataParserStringCheckers = GetEligibleChecker<string>;

export interface DataParserDefinitionString extends DataParserDefinition<
	DataParserStringCheckers
> {
	readonly coerce: boolean;
}

export const stringKind = createDataParserKind("string");

export class DataParserString<
	GenericDefinition extends DataParserDefinitionString = DataParserDefinitionString,
> extends DataParserBase.init(
		stringKind,
	)<
		GenericDefinition,
		string,
		string
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserString);
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
	) => DataParserString<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserString,
		data: unknown,
		error: DataParserError,
	): (
			| string
			| typeof SymbolDataParserError
		) {
		const inputData = data;
		if (self.definition.coerce) {
			try {
				// eslint-disable-next-line no-param-reassign
				data = String(data);
			} catch {}
		}

		if (typeof data === "string") {
			return data;
		}

		return addIssue(
			error,
			"string",
			inputData,
			self.definition.errorMessage,
		);
	}

	public static override dataParserIsAsynchronous(self: DataParserString) {
		return false;
	}

	public static override prepareDefinition(
		definition?: Partial<DataParserDefinitionString>,
	): DataParserDefinitionString {
		return {
			...definition,
			coerce: definition?.coerce ?? false,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/string/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionString> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<DataParserDefinitionString>,
			GenericDefinition
		>,
	): DataParserString<
			MergeDefinition<
				DataParserDefinitionString,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserString(this.prepareDefinition(definition)) as never;
	}
}

export const string = detachObjectMethod(DataParserString, "create");
