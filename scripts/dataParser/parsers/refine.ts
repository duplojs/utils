import { type NeverCoalescing, type Kind } from "@scripts/common";
import { dataParserCheckerInit, type DataParserCheckerDefinition, type DataParserChecker } from "@scripts/dataParser/base";
import { addIssue } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import { type AssignObjects } from "@scripts/object";

export interface DataParserCheckerDefinitionRefine extends DataParserCheckerDefinition {
	theFunction(input: unknown): boolean;
}

export const dataParserCheckerRefineKind = createDataParserKind("refine");

type _DataParserCheckerRefine<
	GenericDefinition extends DataParserCheckerDefinitionRefine,
> = (
	& Kind<typeof dataParserCheckerRefineKind.definition>
	& DataParserChecker<
		GenericDefinition,
		string
	>
);

export interface DataParserCheckerRefine<
	GenericDefinition extends DataParserCheckerDefinitionRefine = DataParserCheckerDefinitionRefine,
> extends _DataParserCheckerRefine<GenericDefinition> {

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
		AssignObjects<
			NeverCoalescing<GenericDefinition, DataParserCheckerDefinitionRefine>,
			{ theFunction(input: GenericInput): boolean }
		>
	> {
	return dataParserCheckerInit<DataParserCheckerRefine>(
		dataParserCheckerRefineKind,
		{
			definition: {
				...definition,
				theFunction,
			},
		},
		(value, error, self) => self.definition.theFunction(value)
			? value
			: addIssue(error, "value matching refine predicate", value, self.definition.errorMessage),
	) as never;
}

export type CheckerRefineImplementation<
	GenericInput extends unknown,
> = DataParserCheckerRefine<
	AssignObjects<
		DataParserCheckerDefinitionRefine,
		{
			theFunction(
				input: GenericInput,
			): boolean;
		}
	>
>;
