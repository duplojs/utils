import { type FixDeepFunctionInfer, type NeverCoalescing, type SimplifyTopLevel } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
import { type DataParserChecker } from "../baseChecker";

export class DataParserOptionalExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionOptional = dataParsers.DataParserDefinitionOptional,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserOptional)<
		GenericDefinition,
		Output<dataParsers.DataParserOptional<GenericDefinition>>,
		Input<dataParsers.DataParserOptional<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserOptionalExtended);
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
	) => DataParserOptionalExtended<
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
	) => DataParserOptionalExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public default<
		GenericInput extends Output<GenericDefinition["inner"]>,
	>(
		input: GenericInput,
	): DataParserOptionalExtended<
			SimplifyTopLevel<
			Omit<GenericDefinition, "coalescingValue">
			& { readonly coalescingValue: GenericInput }
			>
		> {
		return optional(this.definition.inner, {
			...this.definition,
			coalescingValue: input,
		}) as never;
	}

	public static create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionOptional<
				Output<GenericDataParser>
			>,
			"inner"
		> = never,
	>(
		inner: GenericDataParser,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionOptional<
					Output<GenericDataParser>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): DataParserOptionalExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionOptional,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
			}
			>
		> {
		return new DataParserOptionalExtended(dataParsers.optional(inner, definition).definition) as never;
	}
}

export const optional = DataParserOptionalExtended.create;
