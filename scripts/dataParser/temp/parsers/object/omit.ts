import { type NeverCoalescing, pipe, type SimplifyTopLevel } from "@scripts/common";
import { type MergeDefinition } from "@scripts/dataParser/types";
import * as DArray from "@scripts/array";
import * as DObject from "@scripts/object";
import * as DString from "@scripts/string";
import { type DataParserDefinitionObject, type DataParserObject, type DataParserObjectShape, object } from ".";

export function omitShape(
	shape: DataParserObjectShape,
	omitObject: Partial<Record<string, true>>,
): DataParserObjectShape {
	return pipe(
		shape,
		DObject.entries,
		DArray.filter(([key]) => !DString.isKeyof(key, omitObject)),
		DObject.fromEntries,
	);
}

export function omit<
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
	omitObject: GenericOmitObject,
	definition?: GenericDefinition,
): DataParserObject<
		MergeDefinition<
			DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & {
				readonly shape: SimplifyTopLevel<
					Omit<
						GenericDataParserObject["definition"]["shape"],
						keyof GenericOmitObject
					>
				>;
			}
		>
	> {
	const newShape = omitShape(
		dataParser.definition.shape,
		omitObject,
	);

	return object(
		newShape,
		definition,
	);
}
