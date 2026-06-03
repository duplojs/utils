import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { string } from "..";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";

export interface DataParserCheckerDefinitionUuid extends DataParserCheckerDefinition {
	regex: RegExp;
}

export const checkerUuidKind = createDataParserKind("checker-uuid");

const uuidRegex = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;

export class DataParserCheckerUuid extends DataParserCheckerBase.init(
	checkerUuidKind,
)<
		DataParserCheckerDefinitionUuid,
		string
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerUuid);
	}

	public isAsynchronous() {
		return false;
	}

	public static override execCheck(
		data: string,
		error: DataParserError,
		self: DataParserCheckerUuid,
		dataParser: DataParser,
	) {
		return uuidRegex.test(data)
			? data
			: addIssue(
				error,
				"uuid",
				data,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
	}

	public static override create(
		definition: Partial<
			Omit<DataParserCheckerDefinitionUuid, "regex">
		> = {},
	) {
		return new DataParserCheckerUuid({
			...definition,
			regex: uuidRegex,
		});
	}
}

export const checkerUuid = DataParserCheckerUuid.create;

export function uuid(
	definition?: Partial<
		Omit<DataParserCheckerDefinitionUuid, "regex">
	>,
) {
	return string({
		checkers: [checkerUuid(definition)],
	});
}
