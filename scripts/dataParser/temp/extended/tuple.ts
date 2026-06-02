import { type FixDeepFunctionInfer, type IsEqual, type NeverCoalescing, type Or, type SimplifyTopLevel } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParsers } from "../types/dataParsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserTupleExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTuple = dataParsers.DataParserDefinitionTuple,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserTuple)<
		GenericDefinition,
		Output<dataParsers.DataParserTuple<GenericDefinition>>,
		Input<dataParsers.DataParserTuple<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserTupleExtended);
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
	) => DataParserTupleExtended<
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
	) => DataParserTupleExtended<
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
	): DataParserTupleExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerArrayMin]
			>
		> {
		return this.addChecker(dataParsers.checkerArrayMin(min, definition)) as never;
	}

	public max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">
		>,
	): DataParserTupleExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerArrayMax]
			>
		> {
		return this.addChecker(dataParsers.checkerArrayMax(max, definition)) as never;
	}

	public rest<
		GenericDataParser extends DataParsers,
	>(
		dataParser: GenericDataParser,
	): DataParserTupleExtended<
			SimplifyTopLevel<
			Omit<GenericDefinition, "rest">
			& { readonly rest: GenericDataParser }
			>
		> {
		return tuple(this.definition.shape, {
			...this.definition,
			rest: dataParser,
		}) as never;
	}

	public static create<
		const GenericShape extends dataParsers.TupleShape,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionTuple<
				dataParsers.DataParserTupleShapeOutput<
					GenericShape,
					GenericDefinition["rest"]
				>
			>,
			"shape"
		> = never,
	>(
		shape: GenericShape,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionTuple<
					dataParsers.DataParserTupleShapeOutput<
						GenericShape,
						GenericDefinition["rest"]
					>
				>,
				"shape"
			>,
			GenericDefinition
		>,
	): DataParserTupleExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionTuple,
			NeverCoalescing<GenericDefinition, {}> & {
				readonly shape: GenericShape;
				readonly rest: Or<[
					IsEqual<GenericDefinition["rest"], unknown>,
					IsEqual<GenericDefinition, never>,
				]> extends true
					? undefined
					: GenericDefinition["rest"];
			}
			>
		> {
		return new DataParserTupleExtended(this.prepareDefinition(shape, definition)) as never;
	}
}

export const tuple = DataParserTupleExtended.create;
