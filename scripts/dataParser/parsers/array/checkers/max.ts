import { detachObjectMethod } from "@scripts/common";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionArrayMax<
	GenericMax extends number = number,
> extends DataParserCheckerDefinition {
	max: GenericMax;
}

export const checkerArrayMaxKind = createDataParserKind("checker-array-max");

export class DataParserCheckerArrayMax<
	GenericMax extends number = number,
> extends DataParserCheckerBase.init(
		checkerArrayMaxKind,
	)<
		DataParserCheckerDefinitionArrayMax<GenericMax>,
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
	): unknown {
		return data.length <= self.definition.max
			? data
			: addIssue(
				error,
				`array.length <= ${self.definition.max}`,
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
				self,
			);
	}

	public static override create<
		GenericMax extends number,
	>(
		max: GenericMax,
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

export const checkerArrayMax = detachObjectMethod(DataParserCheckerArrayMax, "create");
