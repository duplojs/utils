import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserCheckerBase } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionNumberMax extends DataParserCheckerDefinition {
	max: number;
	exclusive: boolean;
}

export const checkerNumberMaxKind = createDataParserKind("checker-number-max");

type _DataParserCheckerNumberMax = (
	& Kind<typeof checkerNumberMaxKind.definition>
	& DataParserCheckerBase<
		DataParserCheckerDefinitionNumberMax,
		number
	>
);

export interface DataParserCheckerNumberMax extends _DataParserCheckerNumberMax {

}

export function checkerNumberMax(
	max: number,
	definition: Partial<
		Omit<DataParserCheckerDefinitionNumberMax, "max">
	> = {},
): DataParserCheckerNumberMax {
	return dataParserCheckerInit<DataParserCheckerNumberMax>(
		checkerNumberMaxKind,
		{
			definition: {
				...definition,
				exclusive: definition.exclusive ?? false,
				max,
			},
		},
		(value, error, self, dataParser) => {
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
		},
	);
}
