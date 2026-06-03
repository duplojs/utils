import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLiteral = dataParsers.DataParserDefinitionLiteral,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserLiteral)<
		GenericDefinition,
		Output<dataParsers.DataParserLiteral<GenericDefinition>>,
		Input<dataParsers.DataParserLiteral<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserLiteralExtended);
	}

	public declare addChecker: <
		const GenericChecker extends readonly [
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
	) => DataParserLiteralExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public declare refine: (
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	) => DataParserLiteralExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/literal/index.md}
	 */
	public static override create<
		const GenericValue extends dataParsers.LiteralValue,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionLiteral<GenericValue>,
			"value"
		> = never,
	>(
		value: GenericValue | readonly GenericValue[],
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionLiteral<GenericValue>,
				"value"
			>,
			GenericDefinition
		>,
	): DataParserLiteralExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionLiteral,
			NeverCoalescing<GenericDefinition, {}> & {
				readonly value: readonly GenericValue[];
			}
			>
		> {
		return new DataParserLiteralExtended(this.prepareDefinition(value, definition)) as never;
	}
}

export const literal = detachObjectMethod(DataParserLiteralExtended, "create");
