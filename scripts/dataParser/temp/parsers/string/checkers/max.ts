import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionStringMax extends DataParserCheckerDefinition {
	max: number;
}

export const checkerStringMaxKind = createDataParserKind("checker-string-max");

export class DataParserCheckerStringMax extends DataParserCheckerBase.init(
	checkerStringMaxKind,
)<
		DataParserCheckerDefinitionStringMax,
		string
	> {
	public get classConstructor() {
		return DataParserCheckerStringMax;
	}

	public isAsynchronous() {
		return false;
	}

	public static execCheck(
		data: string,
		error: DataParserError,
		self: DataParserCheckerStringMax,
		dataParser: DataParser,
	) {
		return data.length <= self.definition.max
			? data
			: addIssue(
				error,
				`string.length <= ${self.definition.max}`,
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
	}

	public static create(
		max: number,
		definition: Partial<
			Omit<DataParserCheckerDefinitionStringMax, "max">
		> = {},
	) {
		return new DataParserCheckerStringMax({
			...definition,
			max,
		});
	}
}

export const checkerStringMax = DataParserCheckerStringMax.create;
