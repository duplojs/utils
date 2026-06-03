import { detachObjectMethod } from "@scripts/common";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionBigIntMin extends DataParserCheckerDefinition {
	min: bigint;
}

export const checkerBigIntMinKind = createDataParserKind("checker-bigint-min");

export class DataParserCheckerBigIntMin extends DataParserCheckerBase.init(
	checkerBigIntMinKind,
)<
		DataParserCheckerDefinitionBigIntMin,
		bigint
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerBigIntMin);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
		value: bigint,
		error: DataParserError,
		self: DataParserCheckerBigIntMin,
		dataParser: DataParser,
	) {
		if (value < self.definition.min) {
			return addIssue(
				error,
				`bigint >= ${self.definition.min}n`,
				value,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
		}

		return value;
	}

	public static override create(
		min: bigint,
		definition: Partial<
			Omit<DataParserCheckerDefinitionBigIntMin, "min">
		> = {},
	) {
		return new DataParserCheckerBigIntMin({
			...definition,
			min,
		});
	}
}

export const checkerBigIntMin = detachObjectMethod(DataParserCheckerBigIntMin, "create");
