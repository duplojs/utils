import { type Adaptor, type FixDeepFunctionInfer, type Kind, type NeverCoalescing, type SimplifyTopLevel, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
import { type AssignObjects } from "@scripts/object";

type _DataParserObjectExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionObject,
> = (
	& Kind<typeof dataParsers.objectKind.definition>
	& DataParserExtended<
		GenericDefinition,
		dataParsers.DataParserObjectShapeOutput<GenericDefinition["shape"]>,
		dataParsers.DataParserObjectShapeInput<GenericDefinition["shape"]>
	>
);

export interface DataParserObjectExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionObject = dataParsers.DataParserDefinitionObject,
> extends _DataParserObjectExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserObjectCheckers<Output<this>>,
			...dataParsers.DataParserObjectCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserObjectCheckers<Output<this>>,
				...dataParsers.DataParserObjectCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserObjectExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	/**
	 * @deprecated Method with unreliable typing.
	 */
	construct<
		const GenericDefinition extends dataParsers.DataParserDefinitionObject,
	>(
		definition: GenericDefinition
	): DataParserObjectExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionObject,
			GenericDefinition
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
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	omit<
		const GenericOmitObject extends Partial<
			Record<
				keyof GenericDefinition["shape"],
				true
			>
		>,
		const GenericSubDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionObject, "shape" | "optimizedShape">
		> = never,
	>(
		omitObject: GenericOmitObject,
		definition?: GenericDefinition,
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

	pick<
		const GenericPickObject extends Partial<
			Record<
				keyof GenericDefinition["shape"],
				true
			>
		>,
		const GenericSubDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionObject, "shape" | "optimizedShape">
		> = never,
	>(
		pickObject: GenericPickObject,
		definition?: GenericDefinition,
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

	extends<
		const GenericExtension extends dataParsers.DataParserObjectShape,
		const GenericSubDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionObject, "shape" | "optimizedShape">
		> = never,
	>(
		extension: GenericExtension,
		definition?: GenericDefinition,
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

	partial<
		const GenericSubDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionObject, "shape" | "optimizedShape">
		> = never,
	>(
		definition?: GenericDefinition,
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

	required<
		const GenericSubDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionObject, "shape" | "optimizedShape">
		> = never,
	>(
		definition?: GenericDefinition,
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

export function object<
	const GenericShape extends dataParsers.DataParserObjectShape,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionObject, "shape">
	> = never,
>(
	shape: GenericShape,
	definition?: GenericDefinition,
): DataParserObjectExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & { shape: GenericShape }
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserObject,
		DataParserObjectExtended
	>(
		dataParsers.object(shape, definition) as never,
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
	) as never;

	return object.overrideHandler.apply(self) as never;
}

object.overrideHandler = createOverride<DataParserObjectExtended>("@duplojs/utils/data-parser-extended/object");
