import { type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../../kind";

export interface DataParserCheckerDefinitionNumberMin extends DataParserCheckerDefinition {
	min: number;
	exclusive: boolean;
}

export const checkerNumberMinKind = createDataParserKind("checker-number-min");

type _DataParserCheckerNumberMin = (
	& Kind<typeof checkerNumberMinKind.definition>
	& DataParserChecker<
		DataParserCheckerDefinitionNumberMin,
		number
	>
);

export interface DataParserCheckerNumberMin extends _DataParserCheckerNumberMin {

}

export function checkerNumberMin(
	min: number,
	definition: Partial<
		Omit<DataParserCheckerDefinitionNumberMin, "min">
	> = {},
): DataParserCheckerNumberMin {
	return dataParserCheckerInit<DataParserCheckerNumberMin>(
		checkerNumberMinKind,
		{
			definition: {
				...definition,
				exclusive: definition.exclusive ?? false,
				min,
			},
		},
		(value, error, self, dataParser) => {
			const isValid = self.definition.exclusive
				? value > self.definition.min
				: value >= self.definition.min;

			if (isValid) {
				return value;
			}

			return addIssue(
				error,
				`number ${self.definition.exclusive ? ">" : ">="} ${self.definition.min}`,
				value,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			);
		},
	);
}
