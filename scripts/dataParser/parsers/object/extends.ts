import { type MergeDefinition } from "@scripts/dataParser/types";
import { type DataParserObjectShape, object, type DataParserDefinitionObject, type DataParserObject } from ".";
import { type NeverCoalescing } from "@scripts/common";
import * as DObject from "@scripts/object";
import { type AssignObjects } from "@scripts/object";

export function extendsShape(
	shape: DataParserObjectShape,
	extension: DataParserObjectShape,
): DataParserObjectShape {
	return DObject.assign(shape, extension);
}

/**
 * {@include dataParser/classic/object/extends/index.md}
 */
function extend<
	GenericDataParserObject extends DataParserObject,
	const GenericExtension extends DataParserObjectShape,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionObject, "shape" | "optimizedShape">
	> = never,
>(
	dataParser: GenericDataParserObject,
	extension: GenericExtension,
	definition?: GenericDefinition,
): DataParserObject<
		MergeDefinition<
			DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & {
				readonly shape: AssignObjects<
					GenericDataParserObject["definition"]["shape"],
					GenericExtension
				>;
			}
		>
	> {
	const newShape = extendsShape(
		dataParser.definition.shape,
		extension,
	);

	return object(
		newShape,
		definition,
	);
}

export { extend as extends };
