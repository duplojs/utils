import { type MergeDefinition } from "@scripts/dataParser/types";
import { type DataParserObjectShape, type DataParserDefinitionObject, type DataParserObject, object } from ".";
import { pipe, whenNot, type NeverCoalescing, type SimplifyTopLevel } from "@scripts/common";
import { type DataParserOptionalCheckers, type DataParserOptional, optionalKind, optional } from "../optional";
import { identifier } from "@scripts/dataParser/identifier";
import * as DObject from "@scripts/object";
import * as DArray from "@scripts/array";

export type PartialDataParserObject<
	GenericShape extends DataParserObjectShape,
> = SimplifyTopLevel<{
	[Prop in keyof GenericShape]: GenericShape[Prop] extends DataParserOptional<any>
		? GenericShape[Prop]
		: DataParserOptional<{
			inner: GenericShape[Prop];
			checkers: DataParserOptionalCheckers[];
			coalescingValue: unknown;
		}>
}>;

export function partialShape(
	shape: DataParserObjectShape,
): DataParserObjectShape {
	return pipe(
		shape,
		DObject.entries,
		DArray.map(
			([key, dataParser]) => pipe(
				dataParser,
				whenNot(
					identifier(optionalKind),
					optional,
				),
				(dataParser) => DObject.entry(key, dataParser),
			),
		),
		DObject.fromEntries,
	);
}

export function partial<
	GenericDataParserObject extends DataParserObject,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionObject, "shape" | "optimizedShape">
	> = never,
>(
	dataParser: GenericDataParserObject,
	definition?: GenericDefinition,
): DataParserObject<
		MergeDefinition<
			DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & {
				readonly shape: PartialDataParserObject<
					GenericDataParserObject["definition"]["shape"]
				>;
			}
		>
	> {
	const newShape = partialShape(dataParser.definition.shape);

	return object(
		newShape,
		definition,
	);
}
