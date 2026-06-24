import { detachObjectMethod } from "@scripts/common";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
import * as DDate from "@scripts/date";

export interface DataParserCheckerDefinitionTimeMin extends DataParserCheckerDefinition {
	min: DDate.TheTime;
}

export const checkerTimeMinKind = createDataParserKind("checker-time-min");

export class DataParserCheckerTimeMin extends DataParserCheckerBase.init(
	checkerTimeMinKind,
)<
		DataParserCheckerDefinitionTimeMin,
		DDate.TheTime
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerTimeMin);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
		value: DDate.TheTime,
		error: DataParserError,
		self: DataParserCheckerTimeMin,
		dataParser: DataParser,
	): unknown {
		return DDate.greaterTime(value, self.definition.min)
			? value
			: addIssue(
				error,
				`time >= ${self.definition.min.toString()}`,
				value,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
				self,
			);
	}

	/**
	 * {@include dataParser/classic/checkerTimeMin/index.md}
	 */
	public static override create(
		min: DDate.TheTime,
		definition: Partial<
			Omit<DataParserCheckerDefinitionTimeMin, "min">
		> = {},
	) {
		return new DataParserCheckerTimeMin({
			...definition,
			min,
		});
	}
}

/**
 * {@include dataParser/classic/checkerTimeMin/index.md}
 */
export const checkerTimeMin = detachObjectMethod(DataParserCheckerTimeMin, "create");
