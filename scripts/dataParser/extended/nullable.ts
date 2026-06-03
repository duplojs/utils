import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing, type SimplifyTopLevel } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
import { type DataParserChecker } from "../baseChecker";

export class DataParserNullableExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNullable = dataParsers.DataParserDefinitionNullable,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserNullable)<
		GenericDefinition,
		Output<dataParsers.DataParserNullable<GenericDefinition>>,
		Input<dataParsers.DataParserNullable<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserNullableExtended);
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
	) => DataParserNullableExtended<
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
	) => DataParserNullableExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public default<
		GenericInput extends Output<GenericDefinition["inner"]>,
	>(
		input: GenericInput,
	): DataParserNullableExtended<
			SimplifyTopLevel<
			Omit<GenericDefinition, "coalescingValue">
			& { readonly coalescingValue: GenericInput }
			>
		> {
		return nullable(this.definition.inner, {
			...this.definition,
			coalescingValue: input,
		}) as never;
	}

	/**
	 * {@include dataParser/extended/nullable/index.md}
	 */
	public static override create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionNullable<
				Output<GenericDataParser>
			>,
			"inner"
		> = never,
	>(
		inner: GenericDataParser,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionNullable<
					Output<GenericDataParser>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): DataParserNullableExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionNullable,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
			}
			>
		> {
		return new DataParserNullableExtended(this.prepareDefinition(inner, definition)) as never;
	}
}

export const nullable = detachObjectMethod(DataParserNullableExtended, "create");
