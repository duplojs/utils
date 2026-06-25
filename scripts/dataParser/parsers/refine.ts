import { detachObjectMethod, callThen, type NeverCoalescing, type SimplifyTopLevel, type MaybePromise, type AnyFunction } from "@scripts/common";
import { DataParserCheckerBase, type DataParserCheckerDefinition } from "../baseChecker";
import { type DataParser } from "../base";
import { addIssue, type DataParserError } from "@scripts/dataParser/error";
import { createDataParserKind } from "@scripts/dataParser/kind";

export interface DataParserCheckerDefinitionRefine<
	GenericInput extends unknown = unknown,
> extends DataParserCheckerDefinition {
	theFunction(input: GenericInput): MaybePromise<boolean>;
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
	): unknown {
		return callThen(
			self.definition.theFunction(value),
			(awaitedResult) => awaitedResult
				? value
				: addIssue(
					error,
					"value matching refine predicate",
					value,
					self.definition.errorMessage ?? dataParser.definition.errorMessage,
					self,
				),
			(catchError) => addIssue(
				error,
				"successful refine result",
				catchError,
				self.definition.errorMessage ?? dataParser.definition.errorMessage,
				self,
			),
		);
	}

	public static override create<
		GenericInput extends unknown,
		GenericPredicate extends GenericInput,
		const GenericDefinition extends Partial<
			Omit<DataParserCheckerDefinitionRefine, "theFunction">
		> = never,
	>(
		theFunction: (input: GenericInput) => input is GenericPredicate,
		definition?: GenericDefinition,
	): DataParserCheckerRefine<
		SimplifyTopLevel<
			& NeverCoalescing<
				GenericDefinition,
				Omit<DataParserCheckerDefinitionRefine<GenericInput>, "theFunction">
			>
			& {
				theFunction(input: GenericInput): input is GenericPredicate;
			}
		>,
		GenericInput
	>;

	public static override create<
		GenericInput extends unknown,
		const GenericDefinition extends Partial<
			Omit<DataParserCheckerDefinitionRefine, "theFunction">
		> = never,
	>(
		theFunction: (input: GenericInput) => MaybePromise<boolean>,
		definition?: GenericDefinition,
	): DataParserCheckerRefine<
		SimplifyTopLevel<
			& NeverCoalescing<
				GenericDefinition,
				Omit<DataParserCheckerDefinitionRefine<GenericInput>, "theFunction">
			>
			& {
				theFunction(input: GenericInput): MaybePromise<boolean>;
			}
		>,
		GenericInput
	>;

	public static override create(
		theFunction: AnyFunction,
		definition?: Partial<DataParserCheckerDefinitionRefine>,
	) {
		return new DataParserCheckerRefine({
			...definition,
			theFunction,
		});
	}
}

export const checkerRefine = detachObjectMethod(DataParserCheckerRefine, "create");

export type CheckerRefineImplementation<
	GenericInput extends unknown,
> = DataParserCheckerRefine<
	DataParserCheckerDefinitionRefine<GenericInput>
>;
