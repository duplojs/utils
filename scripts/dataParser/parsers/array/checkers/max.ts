import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionArrayMax extends DataParserCheckerDefinition {
	max: number;
}

export const checkerArrayMaxKind = createDataParserKind("checker-array-max");

export class DataParserCheckerArrayMax extends DataParserCheckerBase.init(
	checkerArrayMaxKind,
)<
		DataParserCheckerDefinitionArrayMax,
		unknown[]
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerArrayMax);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
		data: unknown[],
		error: DataParserError,
		self: DataParserCheckerArrayMax,
		dataParser: DataParser,
	) {
		return data.length <= self.definition.max
			? data
			: addIssue(
				error,
				`array.length <= ${self.definition.max}`,
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
	}

	public static override create(
		max: number,
		definition: Partial<
			Omit<DataParserCheckerDefinitionArrayMax, "max">
		> = {},
	) {
		return new DataParserCheckerArrayMax({
			...definition,
			max,
		});
	}
}

export const checkerArrayMax = DataParserCheckerArrayMax.create;
