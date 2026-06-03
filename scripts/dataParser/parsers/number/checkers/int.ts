import { detachObjectMethod } from "@scripts/common";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { number as numberParser } from "..";
import { createDataParserKind } from "../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionInt extends DataParserCheckerDefinition {

}

export const checkerIntKind = createDataParserKind("checker-number-int");

export class DataParserCheckerInt extends DataParserCheckerBase.init(
	checkerIntKind,
)<
		DataParserCheckerDefinitionInt,
		number
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerInt);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
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

	public static override create(
		definition: Partial<DataParserCheckerDefinitionInt> = {},
	) {
		return new DataParserCheckerInt(definition);
	}
}

export const checkerInt = detachObjectMethod(DataParserCheckerInt, "create");

export function int(
	definition?: Partial<DataParserCheckerDefinitionInt>,
) {
	return numberParser({
		checkers: [checkerInt(definition)],
	});
}
