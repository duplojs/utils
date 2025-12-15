import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

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
	): ReturnType<
		typeof dataParsers.omit<
			dataParsers.DataParserObject<GenericDefinition>,
			GenericOmitObject,
			GenericSubDefinition
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
	): ReturnType<
		typeof dataParsers.pick<
			dataParsers.DataParserObject<GenericDefinition>,
			GenericPickObject,
			GenericSubDefinition
		>
	>;

	partial<
		const GenericSubDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionObject, "shape" | "optimizedShape">
		> = never,
	>(
		definition?: GenericDefinition,
	): ReturnType<
		typeof dataParsers.partial<
			dataParsers.DataParserObject<GenericDefinition>,
			GenericSubDefinition
		>
	>;

	required<
		const GenericSubDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionObject, "shape" | "optimizedShape">
		> = never,
	>(
		definition?: GenericDefinition,
	): ReturnType<
		typeof dataParsers.required<
			dataParsers.DataParserObject<GenericDefinition>,
			GenericSubDefinition
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
			omit: (self, omitObject, definition) => dataParsers.omit(
				self,
				omitObject,
				definition,
			),
			pick: (self, pickObject, definition) => dataParsers.pick(
				self,
				pickObject,
				definition,
			),
			partial: (self, definition) => dataParsers.partial(
				self,
				definition,
			),
			required: (self, definition) => dataParsers.required(
				self,
				definition,
			),
		},
	) as never;

	return object.overrideHandler.apply(self) as never;
}

object.overrideHandler = createOverride<DataParserObjectExtended>("@duplojs/utils/data-parser-extended/object");
