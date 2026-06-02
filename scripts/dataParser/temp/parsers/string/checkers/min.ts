import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionStringMin extends DataParserCheckerDefinition {
	min: number;
}

export const checkerStringMinKind = createDataParserKind("checker-string-min");

export class DataParserCheckerStringMin extends DataParserCheckerBase.init(
	checkerStringMinKind,
)<
		DataParserCheckerDefinitionStringMin,
		string
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerStringMin);
	}

	public isAsynchronous() {
		return false;
	}

	public static execCheck(
		data: string,
		error: DataParserError,
		self: DataParserCheckerStringMin,
		dataParser: DataParser,
	) {
		return data.length >= self.definition.min
			? data
			: addIssue(
				error,
				`string.length >= ${self.definition.min}`,
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
	}

	public static create(
		min: number,
		definition: Partial<
			Omit<DataParserCheckerDefinitionStringMin, "min">
		> = {},
	) {
		return new DataParserCheckerStringMin({
			...definition,
			min,
		});
	}
}

export const checkerStringMin = DataParserCheckerStringMin.create;
