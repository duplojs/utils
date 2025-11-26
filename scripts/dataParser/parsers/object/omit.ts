import { type MergeDefinition } from "@scripts/dataParser/types";
import { object, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type SimplifyTopLevel, type NeverCoalescing, pipe } from "@scripts/common";
import * as DObject from "@scripts/object";
import * as DString from "@scripts/string";
import * as DArray from "@scripts/array";

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
	const newShape = pipe(
		dataParser.definition.shape,
		DObject.entries,
		DArray.filter(([key]) => !DString.isKeyof(key, omitObject)),
		DObject.fromEntries,
	);

	return object(
		newShape,
		definition,
	);
}
