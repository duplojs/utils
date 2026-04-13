import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";
import { string } from "..";

export interface DataParserCheckerDefinitionUuid extends DataParserCheckerDefinition {
	regex: RegExp;
}

export const checkerUuidKind = createDataParserKind("checker-uuid");

type _DataParserCheckerUuid = (
	& Kind<typeof checkerUuidKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionUuid,
		string
	>
);

export interface DataParserCheckerUuid extends _DataParserCheckerUuid {
}

const uuidRegex = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;

export function checkerUuid(
	definition: Partial<
		Omit<DataParserCheckerDefinitionUuid, "regex">
	> = {},
): DataParserCheckerUuid {
	return dataParserCheckerInit<DataParserCheckerUuid>(
		checkerUuidKind,
		{
			definition: {
				...definition,
				regex: uuidRegex,
			},
		},
		(data, error, self) => uuidRegex.test(data)
			? data
			: addIssue(error, "uuid", data, self.definition.errorMessage),
	);
}

export function uuid(
	definition?: Partial<
		Omit<DataParserCheckerDefinitionUuid, "regex">
	>,
) {
	return string({
		checkers: [checkerUuid(definition)],
	});
}
