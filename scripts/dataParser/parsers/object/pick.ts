import { type MergeDefinition } from "@scripts/dataParser/types";
import { type DataParserObjectShape, object, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type SimplifyTopLevel, type NeverCoalescing, pipe, type Adaptor } from "@scripts/common";
import * as DObject from "@scripts/object";
import * as DString from "@scripts/string";
import * as DArray from "@scripts/array";

export function pickShape(
	shape: DataParserObjectShape,
	pickObject: Partial<Record<string, true>>,
): DataParserObjectShape {
	return pipe(
		shape,
		DObject.entries,
		DArray.filter(([key]) => DString.isKeyof(key, pickObject)),
		DObject.fromEntries,
	);
}

export function pick<
	GenericDataParserObject extends DataParserObject,
	const GenericOmitObject extends Partial<
		Record<
			keyof GenericDataParserObject["definition"]["shape"],
			true
		>
	>,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionObject, "shape" | "optimizedShape">
	> = never,
>(
	dataParser: GenericDataParserObject,
	pickObject: GenericOmitObject,
	definition?: GenericDefinition,
): DataParserObject<
		MergeDefinition<
			DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & {
				readonly shape: SimplifyTopLevel<
					Pick<
						GenericDataParserObject["definition"]["shape"],
						Adaptor<
							keyof GenericOmitObject,
							keyof GenericDataParserObject["definition"]["shape"]
						>
					>
				>;
			}
		>
	> {
	const newShape = pickShape(
		dataParser.definition.shape,
		pickObject,
	);

	return object(
		newShape,
		definition,
	);
}
