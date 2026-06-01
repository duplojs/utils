import { kindClass } from "@scripts/common";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionNumberMin extends DataParserCheckerDefinition {
	min: number;
	exclusive: boolean;
}

export const checkerNumberMinKind = createDataParserKind("checker-number-min");

export class DataParserCheckerNumberMin extends kindClass(
	checkerNumberMinKind,
	DataParserCheckerBase<
		DataParserCheckerDefinitionNumberMin,
		number
	>,
) {
	public constructor(definition: DataParserCheckerDefinitionNumberMin) {
		super(null as never, definition);
	}

	public get classConstructor() {
		return DataParserCheckerNumberMin;
	}

	public isAsynchronous() {
		return false;
	}

	public static execCheck(
		value: number,
		error: DataParserError,
		self: DataParserCheckerNumberMin,
		dataParser: DataParser,
	) {
		const isValid = self.definition.exclusive
			? value > self.definition.min
			: value >= self.definition.min;

		if (isValid) {
			return value;
		}

		return addIssue(
			error,
			`number ${self.definition.exclusive ? ">" : ">="} ${self.definition.min}`,
			value,
			self.definition.errorMessage ?? dataParser.definition.errorMessage,
		);
	}

	public static create(
		min: number,
		definition: Partial<
			Omit<DataParserCheckerDefinitionNumberMin, "min">
		> = {},
	) {
		return new DataParserCheckerNumberMin({
			...definition,
			exclusive: definition.exclusive ?? false,
			min,
		});
	}
}

export const checkerNumberMin = DataParserCheckerNumberMin.create;
