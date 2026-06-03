import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
import { type DataParserChecker } from "../baseChecker";

export class DataParserArrayExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionArray = dataParsers.DataParserDefinitionArray,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserArray)<
		GenericDefinition,
		Output<dataParsers.DataParserArray<GenericDefinition>>,
		Input<dataParsers.DataParserArray<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserArrayExtended);
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
	) => DataParserArrayExtended<
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
	) => DataParserArrayExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public min(
		min: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">
		>,
	) {
		return this.addChecker(dataParsers.checkerArrayMin(min, definition));
	}

	public max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">
		>,
	) {
		return this.addChecker(dataParsers.checkerArrayMax(max, definition));
	}

	public static override create<
		GenericElement extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionArray<
				Output<GenericElement>[]
			>,
			"element"
		> = never,
	>(
		element: GenericElement,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionArray<
					Output<GenericElement>[]
				>,
				"element"
			>,
			GenericDefinition
		>,
	): DataParserArrayExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionArray,
				NeverCoalescing<GenericDefinition, {}> & {
					element: GenericElement;
				}
			>
		> {
		return new DataParserArrayExtended(this.prepareDefinition(element, definition)) as never;
	}
}

export const array = DataParserArrayExtended.create;
