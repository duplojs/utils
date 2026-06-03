import { callThen, type NeverCoalescing, type SimplifyTopLevel } from "@scripts/common";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../baseChecker";
import { type DataParser } from "../base";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "@scripts/dataParser/kind";

export interface DataParserCheckerDefinitionRefine<
	GenericInput extends unknown = unknown,
> extends DataParserCheckerDefinition {
	theFunction(input: GenericInput): boolean;
}

export const dataParserCheckerRefineKind = createDataParserKind("refine");

export class DataParserCheckerRefine<
	GenericDefinition extends DataParserCheckerDefinitionRefine = DataParserCheckerDefinitionRefine,
	GenericInput extends Parameters<GenericDefinition["theFunction"]>[0] = Parameters<GenericDefinition["theFunction"]>[0],
> extends DataParserCheckerBase.init(
		dataParserCheckerRefineKind,
	)<
		GenericDefinition,
		GenericInput
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCheckerRefine);
	}

	public isAsynchronous() {
		return this.definition.theFunction.constructor.name === "AsyncFunction";
	}

	public static override execCheck(
		value: unknown,
		error: DataParserError,
		self: DataParserCheckerRefine,
		dataParser: DataParser,
	) {
		return callThen(
			self.definition.theFunction(value),
			(awaitedResult) => awaitedResult
				? value
				: addIssue(
					error,
					"value matching refine predicate",
					value,
					self.definition.errorMessage ?? dataParser.definition.errorMessage,
				),
			(catchError) => addIssue(
				error,
				"successful refine result",
				catchError,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
			),
		);
	}

	public static override create<
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
		return new DataParserCheckerRefine({
			...definition,
			theFunction,
		}) as never;
	}
}

export const checkerRefine = DataParserCheckerRefine.create;

export type CheckerRefineImplementation<
	GenericInput extends unknown,
> = DataParserCheckerRefine<
	DataParserCheckerDefinitionRefine<GenericInput>
>;
