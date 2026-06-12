import { detachObjectMethod, NeverCoalescing, type SimplifyTopLevel } from "@scripts/common";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionArrayMin<
	GenericMin extends number = number,
> extends DataParserCheckerDefinition {
	min: GenericMin;
}

export const checkerArrayMinKind = createDataParserKind("checker-array-min");

export class DataParserCheckerArrayMin<
	GenericMin extends number = number,
> extends DataParserCheckerBase.init(
		checkerArrayMinKind,
	)<
		DataParserCheckerDefinitionArrayMin<GenericMin>,
		unknown[]
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerArrayMin);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
		data: unknown[],
		error: DataParserError,
		self: DataParserCheckerArrayMin,
		dataParser: DataParser,
	): unknown {
		return data.length >= self.definition.min
			? data
			: addIssue(
				error,
				`array.length >= ${self.definition.min}`,
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
				self,
			);
	}

	public static override create<
		GenericMin extends number,
	>(
		min: GenericMin,
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

export const checkerArrayMin = detachObjectMethod(DataParserCheckerArrayMin, "create");
