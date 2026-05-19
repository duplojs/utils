import { type NeverCoalescing, type Kind, type SimplifyTopLevel } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserCheckerBase } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";

export interface DataParserCheckerDefinitionRefine<
	GenericInput extends unknown = unknown,
> extends DataParserCheckerDefinition {
	theFunction(input: GenericInput): boolean;
}

export const dataParserCheckerRefineKind = createDataParserKind("refine");

type _DataParserCheckerRefine<
	GenericDefinition extends DataParserCheckerDefinitionRefine,
	GenericInput extends Parameters<GenericDefinition["theFunction"]>[0] = Parameters<GenericDefinition["theFunction"]>[0],
> = (
	& Kind<typeof dataParserCheckerRefineKind.definition>
	& DataParserCheckerBase<
		GenericDefinition,
		GenericInput
	>
);

export interface DataParserCheckerRefine<
	GenericDefinition extends DataParserCheckerDefinitionRefine = DataParserCheckerDefinitionRefine,
	GenericInput extends Parameters<GenericDefinition["theFunction"]>[0] = Parameters<GenericDefinition["theFunction"]>[0],
> extends _DataParserCheckerRefine<
		GenericDefinition,
		GenericInput
	> {

}

export function checkerRefine<
	GenericInput extends unknown,
	const GenericDefinition extends Partial<
		Omit<DataParserCheckerDefinitionRefine, "theFunction">
	> = never,
>(
	theFunction: (input: GenericInput) => boolean,
	definition?: GenericDefinition,
): DataParserCheckerRefine<
		SimplifyTopLevel<
			& NeverCoalescing<
				GenericDefinition,
				DataParserCheckerDefinitionRefine<GenericInput>
			>
			& {
				theFunction(input: GenericInput): boolean;
			}
		>,
		GenericInput
	> {
	return dataParserCheckerInit<DataParserCheckerRefine>(
		dataParserCheckerRefineKind,
		{
			definition: {
				...definition,
				theFunction,
			},
		},
		(value, error, self, dataParser) => self.definition.theFunction(value)
			? value
			: addIssue(error, "value matching refine predicate", value, self.definition.errorMessage ?? dataParser.definition.errorMessage),
	) as never;
}

export type CheckerRefineImplementation<
	GenericInput extends unknown,
> = DataParserCheckerRefine<
	DataParserCheckerDefinitionRefine<GenericInput>
>;
