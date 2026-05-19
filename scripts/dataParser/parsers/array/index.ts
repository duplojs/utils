import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type Input, SymbolDataParserError, type DataParser, type DataParserChecker } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "@scripts/dataParser/types";
import { addIssue, popErrorPath, setErrorPath } from "@scripts/dataParser/error";
import { createDataParserKind } from "../../kind";

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

type _DataParserArray<
	GenericDefinition extends DataParserDefinitionArray,
> = (
	& DataParserBase<
		GenericDefinition,
		Output<GenericDefinition["element"]>[],
		Input<GenericDefinition["element"]>[]
	>
	& Kind<typeof arrayKind.definition>
);

export interface DataParserArray<
	GenericDefinition extends DataParserDefinitionArray = DataParserDefinitionArray,
> extends _DataParserArray<GenericDefinition> {
	addChecker<
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
	): DataParserArray<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/array/index.md}
 */
export function array<
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
	const self = dataParserBaseInit<DataParserArray>(
		arrayKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			element,
		},
		{
			sync: (data, error, self) => {
				if (!(data instanceof Array)) {
					return addIssue(error, "array", data, self.definition.errorMessage);
				}

				let output: SymbolDataParserError | unknown[] = [];
				const currentIndexPath = error.currentPath.length;

				for (let index = 0; index < data.length; index++) {
					setErrorPath(error, `[${index}]`, currentIndexPath);

					const result = self
						.definition
						.element
						.exec(data[index], error);

					if (result === SymbolDataParserError) {
						output = SymbolDataParserError;
					} else if (output !== SymbolDataParserError) {
						output.push(result);
					}
				}

				void (data.length && popErrorPath(error));

				return output as never;
			},
			async: async(data, error, self) => {
				if (!(data instanceof Array)) {
					return addIssue(error, "array", data, self.definition.errorMessage);
				}

				let output: SymbolDataParserError | unknown[] = [];
				const currentIndexPath = error.currentPath.length;

				for (let index = 0; index < data.length; index++) {
					setErrorPath(error, `[${index}]`, currentIndexPath);

					const result = await self
						.definition
						.element
						.asyncExec(data[index], error);

					if (result === SymbolDataParserError) {
						output = SymbolDataParserError;
					} else if (output !== SymbolDataParserError) {
						output.push(result);
					}
				}

				void (data.length && popErrorPath(error));

				return output as never;
			},
			isAsynchronous: (self) => self.definition.element.isAsynchronous(),
		},
		array.overrideHandler,
	);

	return self as never;
}

array.overrideHandler = createOverride<DataParserArray>("@duplojs/utils/data-parser/array");
