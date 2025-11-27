import { pipe, type FixDeepFunctionInfer, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
import * as DObject from "@scripts/object";
import * as DString from "@scripts/string";
import * as DArray from "@scripts/array";

type _DataParserObjectExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionObject,
> = (
	& dataParsers.DataParserObject<GenericDefinition>
	& DataParserExtended
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
				const newShape = pipe(
					self.definition.shape,
					DObject.entries,
					DArray.filter(([key]) => !DString.isKeyof(key, omitObject)),
					DObject.fromEntries,
				);

				return object(
					newShape,
					definition,
				);
			},
			pick: (self, omitObject, definition) => {
				const newShape = pipe(
					self.definition.shape,
					DObject.entries,
					DArray.filter(([key]) => DString.isKeyof(key, omitObject)),
					DObject.fromEntries,
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
