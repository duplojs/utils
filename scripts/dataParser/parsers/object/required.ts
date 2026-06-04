import { type MergeDefinition } from "@scripts/dataParser/types";
import { type DataParserObjectShape, type DataParserDefinitionObject, type DataParserObject, object } from ".";
import { pipe, type NeverCoalescing, type SimplifyTopLevel } from "@scripts/common";
import { type DataParserOptional, optionalKind } from "../optional";
import * as DObject from "@scripts/object";
import * as DArray from "@scripts/array";

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
			([key, dataParser]) => DObject.entry(
				key,
				optionalKind.has(dataParser)
					? (dataParser as DataParserOptional).definition.inner
					: dataParser,
			),
		),
		DObject.fromEntries,
	);
}

/**
 * {@include dataParser/classic/object/required/index.md}
 */
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
