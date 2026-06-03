import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionNumberMax extends DataParserCheckerDefinition {
	max: number;
	exclusive: boolean;
}

export const checkerNumberMaxKind = createDataParserKind("checker-number-max");

export class DataParserCheckerNumberMax extends DataParserCheckerBase.init(
	checkerNumberMaxKind,
)<
		DataParserCheckerDefinitionNumberMax,
		number
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerNumberMax);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
		value: number,
		error: DataParserError,
		self: DataParserCheckerNumberMax,
		dataParser: DataParser,
	) {
		const isValid = self.definition.exclusive
			? value < self.definition.max
			: value <= self.definition.max;

		if (isValid) {
			return value;
		}

		return addIssue(
			error,
			`number ${self.definition.exclusive ? "<" : "<="} ${self.definition.max}`,
			value,
			self.definition.errorMessage ?? dataParser.definition.errorMessage,
		);
	}

	public static override create(
		max: number,
		definition: Partial<
			Omit<DataParserCheckerDefinitionNumberMax, "max">
		> = {},
	) {
		return new DataParserCheckerNumberMax({
			...definition,
			exclusive: definition.exclusive ?? false,
			max,
		});
	}
}

export const checkerNumberMax = DataParserCheckerNumberMax.create;
