import { callThen, type FixDeepFunctionInfer, type MaybePromise, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../../base";
import { addIssue, popErrorPath, setErrorPath, type DataParserError, SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";

export * from "./checkers";

export type DataParserArrayCheckers<
	GenericInput extends unknown[] = unknown[],
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionArray<
	GenericInput extends unknown[] = unknown[],
> extends DataParserDefinition<
		DataParserArrayCheckers<GenericInput>
	> {
	readonly element: DataParser;
}

export const arrayKind = createDataParserKind("array");

export class DataParserArray<
	GenericDefinition extends DataParserDefinitionArray = DataParserDefinitionArray,
> extends DataParserBase.init(
		arrayKind,
	)<
		GenericDefinition,
		Output<GenericDefinition["element"]>[],
		Input<GenericDefinition["element"]>[]
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserArray);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserArray<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserArray,
		data: unknown,
		error: DataParserError,
	): MaybePromise<SymbolDataParserError | unknown[]> {
		if (!(data instanceof Array)) {
			return addIssue(
				error,
				"array",
				data,
				self.definition.errorMessage,
			);
		}

		const currentIndexPath = error.currentPath.length;

		const output = data.reduce<MaybePromise<unknown[] | SymbolDataParserError>>(
			(accumulator, element, index) => callThen(
				accumulator,
				(awaitedAccumulator) => {
					setErrorPath(error, `[${index}]`, currentIndexPath);
					return callThen(
						self.definition.element.exec(element, error),
						(awaitedResult) => {
							if (
								awaitedResult === SymbolDataParserError
								|| awaitedAccumulator === SymbolDataParserError
							) {
								return SymbolDataParserError;
							}

							awaitedAccumulator.push(awaitedResult);

							return awaitedAccumulator;
						},
					);
				},
			),
			[],
		);

		void (currentIndexPath !== error.currentPath.length && popErrorPath(error));

		return output;
	}

	public static override dataParserIsAsynchronous(self: DataParserArray) {
		return self.definition.element.isAsynchronous();
	}

	public static override prepareDefinition(
		element: DataParser,
		definition?: Partial<Omit<DataParserDefinitionArray, "element">>,
	): DataParserDefinitionArray {
		return {
			...definition,
			element,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	public static override create<
		GenericElement extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionArray<Output<GenericElement>[]>,
			"element"
		> = never,
	>(
		element: GenericElement,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionArray<Output<GenericElement>[]>,
				"element"
			>,
			GenericDefinition
		>,
	): DataParserArray<
			MergeDefinition<
				DataParserDefinitionArray,
				& NeverCoalescing<GenericDefinition, {}>
				& {
					readonly element: GenericElement;
				}
			>
		> {
		return new DataParserArray(this.prepareDefinition(element, definition)) as never;
	}
}

export const array = DataParserArray.create;
