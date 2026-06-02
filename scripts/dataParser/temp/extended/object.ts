import { type Adaptor, type FixDeepFunctionInfer, type NeverCoalescing, type SimplifyTopLevel } from "@scripts/common";
import { type AssignObjects } from "@scripts/object";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserObjectExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionObject = dataParsers.DataParserDefinitionObject,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserObject)<
		GenericDefinition,
		Output<dataParsers.DataParserObject<GenericDefinition>>,
		Input<dataParsers.DataParserObject<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserObjectExtended);
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
	) => DataParserObjectExtended<
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
	) => DataParserObjectExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public omit<
		const GenericOmitObject extends Partial<
			Record<
				keyof GenericDefinition["shape"],
				true
			>
		>,
		const GenericSubDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionObject<
				dataParsers.DataParserObjectShapeOutput<
					SimplifyTopLevel<
						Omit<
							GenericDefinition["shape"],
							keyof GenericOmitObject
						>
					>
				>
			>,
			"shape" | "optimizedShape" | "checkers"
		> = never,
	>(
		omitObject: GenericOmitObject,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionObject<
					dataParsers.DataParserObjectShapeOutput<
						SimplifyTopLevel<
							Omit<
								GenericDefinition["shape"],
								keyof GenericOmitObject
							>
						>
					>
				>,
				"shape" | "optimizedShape" | "checkers"
			>,
			GenericSubDefinition
		>,
	): DataParserObjectExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionObject,
			NeverCoalescing<GenericSubDefinition, {}> & {
				readonly shape: SimplifyTopLevel<
					Omit<
						GenericDefinition["shape"],
						keyof GenericOmitObject
					>
				>;
			}
			>
		> {
		return object(dataParsers.omitShape(this.definition.shape, omitObject), definition) as never;
	}

	public pick<
		const GenericPickObject extends Partial<
			Record<
				keyof GenericDefinition["shape"],
				true
			>
		>,
		const GenericSubDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionObject<
				dataParsers.DataParserObjectShapeOutput<
					SimplifyTopLevel<
						Pick<
							GenericDefinition["shape"],
							Adaptor<
								keyof GenericPickObject,
								keyof GenericDefinition["shape"]
							>
						>
					>
				>
			>,
			"shape" | "optimizedShape" | "checkers"
		> = never,
	>(
		pickObject: GenericPickObject,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionObject<
					dataParsers.DataParserObjectShapeOutput<
						SimplifyTopLevel<
							Pick<
								GenericDefinition["shape"],
								Adaptor<
									keyof GenericPickObject,
									keyof GenericDefinition["shape"]
								>
							>
						>
					>
				>,
				"shape" | "optimizedShape" | "checkers"
			>,
			GenericSubDefinition
		>,
	): DataParserObjectExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionObject,
			NeverCoalescing<GenericSubDefinition, {}> & {
				readonly shape: SimplifyTopLevel<
					Pick<
						GenericDefinition["shape"],
						Adaptor<
							keyof GenericPickObject,
							keyof GenericDefinition["shape"]
						>
					>
				>;
			}
			>
		> {
		return object(dataParsers.pickShape(this.definition.shape, pickObject), definition) as never;
	}

	public extends<
		const GenericExtension extends dataParsers.DataParserObjectShape,
		const GenericSubDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionObject<
				dataParsers.DataParserObjectShapeOutput<
					AssignObjects<
						GenericDefinition["shape"],
						GenericExtension
					>
				>
			>,
			"shape" | "optimizedShape" | "checkers"
		> = never,
	>(
		extension: GenericExtension,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionObject<
					dataParsers.DataParserObjectShapeOutput<
						AssignObjects<
							GenericDefinition["shape"],
							GenericExtension
						>
					>
				>,
				"shape" | "optimizedShape" | "checkers"
			>,
			GenericSubDefinition
		>,
	): DataParserObjectExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionObject,
			NeverCoalescing<GenericSubDefinition, {}> & {
				readonly shape: AssignObjects<
					GenericDefinition["shape"],
					GenericExtension
				>;
			}
			>
		> {
		return object(dataParsers.extendsShape(this.definition.shape, extension), definition) as never;
	}

	public partial<
		const GenericSubDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionObject<
				dataParsers.DataParserObjectShapeOutput<
					dataParsers.PartialDataParserObject<GenericDefinition["shape"]>
				>
			>,
			"shape" | "optimizedShape" | "checkers"
		> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionObject<
					dataParsers.DataParserObjectShapeOutput<
						dataParsers.PartialDataParserObject<GenericDefinition["shape"]>
					>
				>,
				"shape" | "optimizedShape" | "checkers"
			>,
			GenericSubDefinition
		>,
	): DataParserObjectExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionObject,
			NeverCoalescing<GenericSubDefinition, {}> & {
				readonly shape: dataParsers.PartialDataParserObject<
					GenericDefinition["shape"]
				>;
			}
			>
		> {
		return object(dataParsers.partialShape(this.definition.shape), definition) as never;
	}

	public required<
		const GenericSubDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionObject<
				dataParsers.DataParserObjectShapeOutput<
					dataParsers.RequireDataParserObject<GenericDefinition["shape"]>
				>
			>,
			"shape" | "optimizedShape" | "checkers"
		> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionObject<
					dataParsers.DataParserObjectShapeOutput<
						dataParsers.RequireDataParserObject<GenericDefinition["shape"]>
					>
				>,
				"shape" | "optimizedShape" | "checkers"
			>,
			GenericSubDefinition
		>,
	): DataParserObjectExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionObject,
			NeverCoalescing<GenericSubDefinition, {}> & {
				readonly shape: dataParsers.RequireDataParserObject<
					GenericDefinition["shape"]
				>;
			}
			>
		> {
		return object(dataParsers.requiredShape(this.definition.shape), definition) as never;
	}

	public static create<
		const GenericShape extends dataParsers.DataParserObjectShape,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionObject<
				dataParsers.DataParserObjectShapeOutput<GenericShape>
			>,
			"shape" | "optimizedShape"
		> = never,
	>(
		shape: GenericShape,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionObject<
					dataParsers.DataParserObjectShapeOutput<GenericShape>
				>,
				"shape" | "optimizedShape"
			>,
			GenericDefinition
		>,
	): DataParserObjectExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & {
				readonly shape: GenericShape;
			}
			>
		> {
		return new DataParserObjectExtended(this.prepareDefinition(shape, definition)) as never;
	}
}

export const object = DataParserObjectExtended.create;
