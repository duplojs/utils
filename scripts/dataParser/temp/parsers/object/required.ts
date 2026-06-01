import { forward, type NeverCoalescing, pipe, type SimplifyTopLevel, when } from "@scripts/common";
import { identifier } from "@scripts/dataParser/identifier";
import { optionalKind, type DataParserOptional } from "@scripts/dataParser/parsers/optional";
import { type MergeDefinition } from "@scripts/dataParser/types";
import * as DArray from "@scripts/array";
import * as DEither from "@scripts/either";
import * as DObject from "@scripts/object";
import { type DataParserDefinitionObject, type DataParserObject, type DataParserObjectShape, object } from ".";

export type RequireDataParserObject<
	GenericShape extends DataParserObjectShape,
> = SimplifyTopLevel<{
	[Prop in keyof GenericShape]: GenericShape[Prop] extends DataParserOptional<any>
		? GenericShape[Prop]["definition"]["inner"]
		: GenericShape[Prop]
}>;

export function requiredShape(
	shape: DataParserObjectShape,
): DataParserObjectShape {
	return pipe(
		shape,
		DObject.entries,
		DArray.map(
			([key, dataParser]) => pipe(
				dataParser,
				when(
					identifier(optionalKind),
					(dataParser) => dataParser.definition.inner,
				),
				DEither.whenIsLeft(forward),
				(dataParser) => DObject.entry(key, dataParser),
			),
		),
		DObject.fromEntries,
	);
}

export function required<
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
				readonly shape: RequireDataParserObject<
					GenericDataParserObject["definition"]["shape"]
				>;
			}
		>
	> {
	const newShape = requiredShape(dataParser.definition.shape);

	return object(
		newShape,
		definition,
	);
}
