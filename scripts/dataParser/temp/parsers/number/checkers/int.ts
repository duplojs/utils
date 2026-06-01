import { kindClass } from "@scripts/common";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { number as numberParser } from "..";
import { createDataParserKind } from "../../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionInt extends DataParserCheckerDefinition {

}

export const checkerIntKind = createDataParserKind("checker-number-int");

export class DataParserCheckerInt extends kindClass(
	checkerIntKind,
	DataParserCheckerBase<
		DataParserCheckerDefinitionInt,
		number
	>,
) {
	public constructor(definition: DataParserCheckerDefinitionInt) {
		super(null as never, definition);
	}

	public get classConstructor() {
		return DataParserCheckerInt;
	}

	public isAsynchronous() {
		return false;
	}

	public static execCheck(
		data: number,
		error: DataParserError,
		self: DataParserCheckerInt,
		dataParser: DataParser,
	) {
		if (Number.isInteger(data)) {
			return data;
		}

		return addIssue(
			error,
			"integer",
			data,
			self.definition.errorMessage ?? dataParser.definition.errorMessage,
		);
	}

	public static create(
		definition: Partial<DataParserCheckerDefinitionInt> = {},
	) {
		return new DataParserCheckerInt(definition);
	}
}

export const checkerInt = DataParserCheckerInt.create;

export function int(
	definition?: Partial<DataParserCheckerDefinitionInt>,
) {
	return numberParser({
		checkers: [checkerInt(definition)],
	});
}
