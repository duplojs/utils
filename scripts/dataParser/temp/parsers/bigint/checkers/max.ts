import { kindClass } from "@scripts/common";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionBigIntMax extends DataParserCheckerDefinition {
	max: bigint;
}

export const checkerBigIntMaxKind = createDataParserKind("checker-bigint-max");

export class DataParserCheckerBigIntMax extends kindClass(
	checkerBigIntMaxKind,
	DataParserCheckerBase<
		DataParserCheckerDefinitionBigIntMax,
		bigint
	>,
) {
	public constructor(definition: DataParserCheckerDefinitionBigIntMax) {
		super(null as never, definition);
	}

	public get classConstructor() {
		return DataParserCheckerBigIntMax;
	}

	public isAsynchronous() {
		return false;
	}

	public static execCheck(
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

	public static create(
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

export const checkerBigIntMax = DataParserCheckerBigIntMax.create;
