import { detachObjectMethod } from "@scripts/common";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionBigIntMax extends DataParserCheckerDefinition {
	max: bigint;
}

export const checkerBigIntMaxKind = createDataParserKind("checker-bigint-max");

export class DataParserCheckerBigIntMax extends DataParserCheckerBase.init(
	checkerBigIntMaxKind,
)<
		DataParserCheckerDefinitionBigIntMax,
		bigint
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerBigIntMax);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
		value: bigint,
		error: DataParserError,
		self: DataParserCheckerBigIntMax,
		dataParser: DataParser,
	) {
		if (value > self.definition.max) {
			return addIssue(
				error,
				`bigint <= ${self.definition.max}n`,
				value,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
		}

		return value;
	}

	public static override create(
		max: bigint,
		definition: Partial<
			Omit<DataParserCheckerDefinitionBigIntMax, "max">
		> = {},
	) {
		return new DataParserCheckerBigIntMax({
			...definition,
			max,
		});
	}
}

export const checkerBigIntMax = detachObjectMethod(DataParserCheckerBigIntMax, "create");
