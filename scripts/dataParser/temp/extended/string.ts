import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type DataParserChecker } from "../baseChecker";

export class DataParserStringExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionString = dataParsers.DataParserDefinitionString,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserString)<
		GenericDefinition,
		Output<dataParsers.DataParserString<GenericDefinition>>,
		Input<dataParsers.DataParserString<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserStringExtended);
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
	) => DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionString> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionString>,
			GenericDefinition
		>,
	): DataParserStringExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionString,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserStringExtended({
			...definition,
			coerce: definition?.coerce ?? false,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}
