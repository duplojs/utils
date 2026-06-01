import { kindClass } from "@scripts/common";
import { createDataParserKind } from "../kind";
import { DataParserBase, type DataParserDefinition } from "./base";

export const dataParserExtendedKind = createDataParserKind("extended");

export abstract class DataParserExtendedBase<
	GenericDefinition extends DataParserDefinition = DataParserDefinition,
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends kindClass(
		dataParserExtendedKind,
		DataParserBase,
	)<
		DataParserBase<
			GenericDefinition,
			GenericOutput,
			GenericInput
		>
	> {

}
