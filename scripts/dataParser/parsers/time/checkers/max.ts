import { detachObjectMethod } from "@scripts/common";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
import * as DDate from "@scripts/date";

export interface DataParserCheckerDefinitionTimeMax extends DataParserCheckerDefinition {
	max: DDate.TheTime;
}

export const checkerTimeMaxKind = createDataParserKind("checker-time-max");

export class DataParserCheckerTimeMax extends DataParserCheckerBase.init(
	checkerTimeMaxKind,
)<
		DataParserCheckerDefinitionTimeMax,
		DDate.TheTime
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerTimeMax);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
		value: DDate.TheTime,
		error: DataParserError,
		self: DataParserCheckerTimeMax,
		dataParser: DataParser,
	): unknown {
		return DDate.lessTime(value, self.definition.max)
			? value
			: addIssue(
				error,
				`time <= ${self.definition.max.toString()}`,
				value,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
				self,
			);
	}

	/**
	 * {@include dataParser/classic/checkerTimeMax/index.md}
	 */
	public static override create(
		max: DDate.TheTime,
		definition: Partial<
			Omit<DataParserCheckerDefinitionTimeMax, "max">
		> = {},
	) {
		return new DataParserCheckerTimeMax({
			...definition,
			max,
		});
	}
}

export const checkerTimeMax = detachObjectMethod(DataParserCheckerTimeMax, "create");
