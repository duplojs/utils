import { type Adaptor, type FixDeepFunctionInfer, type Kind, type NeverCoalescing, type SimplifyTopLevel, createOverride } from "@scripts/common";
import { type DataParserBaseExtended, dataParserBaseExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker, type Input, type Output } from "../base";
import { type AssignObjects } from "@scripts/object";

type _DataParserObjectExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionObject,
> = (
	& Kind<typeof dataParsers.objectKind.definition>
	& DataParserBaseExtended<
		GenericDefinition,
		Output<dataParsers.DataParserObject<GenericDefinition>>,
		Input<dataParsers.DataParserObject<GenericDefinition>>
	>
);

export interface DataParserObjectExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionObject = dataParsers.DataParserDefinitionObject,
> extends _DataParserObjectExtended<GenericDefinition> {
	addChecker<
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
	): DataParserObjectExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	refine(
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>
	): DataParserObjectExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/object/omit/index.md}
	 */
	omit<
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
	>;

	/**
	 * {@include dataParser/extended/object/pick/index.md}
	 */
	pick<
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
	>;

	/**
	 * {@include dataParser/extended/object/extends/index.md}
	 */
	extends<
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
	>;

	/**
	 * {@include dataParser/extended/object/partial/index.md}
	 */
	partial<
		const GenericSubDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionObject<
				dataParsers.DataParserObjectShapeOutput<
					dataParsers.PartialDataParserObject<
						GenericDefinition["shape"]
					>
				>
			>,
			"shape" | "optimizedShape" | "checkers"
		> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionObject<
					dataParsers.DataParserObjectShapeOutput<
						dataParsers.PartialDataParserObject<
							GenericDefinition["shape"]
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
				readonly shape: dataParsers.PartialDataParserObject<
					GenericDefinition["shape"]
				>;
			}
		>
	>;

	/**
	 * {@include dataParser/extended/object/required/index.md}
	 */
	required<
		const GenericSubDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionObject<
				dataParsers.DataParserObjectShapeOutput<
					dataParsers.RequireDataParserObject<
						GenericDefinition["shape"]
					>
				>
			>,
			"shape" | "optimizedShape" | "checkers"
		> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionObject<
					dataParsers.DataParserObjectShapeOutput<
						dataParsers.RequireDataParserObject<
							GenericDefinition["shape"]
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
				readonly shape: dataParsers.RequireDataParserObject<
					GenericDefinition["shape"]
				>;
			}
		>
	>;
}

/**
 * {@include dataParser/extended/object/index.md}
 */
export function object<
	const GenericShape extends dataParsers.DataParserObjectShape,
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionObject<
			dataParsers.DataParserObjectShapeOutput<GenericShape>
		>,
		"shape"
	> = never,
>(
	shape: GenericShape,
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionObject<
				dataParsers.DataParserObjectShapeOutput<GenericShape>
			>,
			"shape"
		>,
		GenericDefinition
	>,
): DataParserObjectExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & { shape: GenericShape }
		>
	> {
	const self = dataParserBaseExtendedInit<
		dataParsers.DataParserObject,
		DataParserObjectExtended
	>(
		dataParsers.object(shape, definition),
		{
			omit: (self, omitObject, definition) => {
				const newShape = dataParsers.omitShape(
					self.definition.shape,
					omitObject,
				);

				return object(
					newShape,
					definition,
				);
			},
			pick: (self, pickObject, definition) => {
				const newShape = dataParsers.pickShape(
					self.definition.shape,
					pickObject,
				);

				return object(
					newShape,
					definition,
				);
			},
			extends: (self, extension, definition) => {
				const newShape = dataParsers.extendsShape(
					self.definition.shape,
					extension,
				);

				return object(
					newShape,
					definition,
				);
			},
			partial: (self, definition) => {
				const newShape = dataParsers.partialShape(
					self.definition.shape,
				);

				return object(
					newShape,
					definition,
				);
			},
			required: (self, definition) => {
				const newShape = dataParsers.requiredShape(
					self.definition.shape,
				);

				return object(
					newShape,
					definition,
				);
			},
		},
		object.overrideHandler,
	);

	return self as never;
}

object.overrideHandler = createOverride<DataParserObjectExtended>("@duplojs/utils/data-parser-extended/object");
