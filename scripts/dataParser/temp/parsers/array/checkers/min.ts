import { kindClass } from "@scripts/common";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionArrayMin extends DataParserCheckerDefinition {
	min: number;
}

export const checkerArrayMinKind = createDataParserKind("checker-array-min");

export class DataParserCheckerArrayMin extends kindClass(
	checkerArrayMinKind,
	DataParserCheckerBase<
		DataParserCheckerDefinitionArrayMin,
		unknown[]
	>,
) {
	public constructor(definition: DataParserCheckerDefinitionArrayMin) {
		super(null as never, definition);
	}

	public get classConstructor() {
		return DataParserCheckerArrayMin;
	}

	public isAsynchronous() {
		return false;
	}

	public static execCheck(
		data: unknown[],
		error: DataParserError,
		self: DataParserCheckerArrayMin,
		dataParser: DataParser,
	) {
		return data.length >= self.definition.min
			? data
			: addIssue(
				error,
				`array.length >= ${self.definition.min}`,
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
	}

	public static create(
		min: number,
		definition: Partial<
			Omit<DataParserCheckerDefinitionArrayMin, "min">
		> = {},
	) {
		return new DataParserCheckerArrayMin({
			...definition,
			min,
		});
	}
}

export const checkerArrayMin = DataParserCheckerArrayMin.create;
