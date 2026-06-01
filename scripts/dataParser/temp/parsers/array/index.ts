import { type FixDeepFunctionInfer, type MaybePromise, type NeverCoalescing, kindClass } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../../base";
import { addIssue, popErrorPath, setErrorPath, type DataParserError, SymbolDataParserError, type SymbolDataParserError as SymbolDataParserErrorType } from "@scripts/dataParser/error";
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
> extends kindClass(
		arrayKind,
		DataParserBase,
	)<
		DataParserBase<
			GenericDefinition,
			Output<GenericDefinition["element"]>[],
			Input<GenericDefinition["element"]>[]
		>
	> {
	public constructor(
		definition: GenericDefinition,
	) {
		super(null as never, definition);
	}

	public get classConstructor() {
		return DataParserArray;
	}

	protected dataParserIsAsynchronous() {
		return this.definition.element.isAsynchronous();
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

	public static execParse(
		self: DataParserArray,
		data: unknown,
		error: DataParserError,
	): (
			| unknown[]
			| SymbolDataParserErrorType
			| Promise<
				| unknown[]
				| SymbolDataParserErrorType
			>
		) {
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
			(accumulator, element, index) => {
				if (accumulator instanceof Promise) {
					return accumulator.then(
						(awaitedAccumulator) => {
							if (awaitedAccumulator === SymbolDataParserError) {
								return awaitedAccumulator;
							}

							setErrorPath(error, `[${index}]`, currentIndexPath);
							const result = self.definition.element.exec(element, error);
							if (result instanceof Promise) {
								return result.then((awaitedResult) => {
									if (awaitedResult === SymbolDataParserError) {
										return awaitedResult;
									}

									awaitedAccumulator.push(awaitedResult);

									return accumulator;
								});
							}

							if (result === SymbolDataParserError) {
								return result;
							}
							awaitedAccumulator.push(result);

							return accumulator;
						},
					);
				}
				if (accumulator === SymbolDataParserError) {
					return accumulator;
				}

				setErrorPath(error, `[${index}]`, currentIndexPath);
				const result = self.definition.element.exec(element, error);

				if (result instanceof Promise) {
					return result.then((awaitedResult) => {
						if (awaitedResult === SymbolDataParserError) {
							return awaitedResult;
						}

						accumulator.push(awaitedResult);

						return accumulator;
					});
				}

				if (result === SymbolDataParserError) {
					return result;
				}
				accumulator.push(result);

				return accumulator;
			},
			[],
		);

		void (data.length && popErrorPath(error));

		return output;
	}

	public static create<
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
		return new DataParserArray({
			...definition,
			element,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}

export const array = DataParserArray.create;
