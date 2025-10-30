import { type NeverCoalescing, type Kind } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { popErrorPath, setErrorPath, SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import {
	type DataParserCheckerArrayMin,
	type DataParserCheckerArrayMax,
} from "./checkers";
import { createDataParserKind } from "../../kind";

export * from "./checkers";

export type DataParserArrayCheckers = (
	| DataParserCheckerArrayMin
	| DataParserCheckerArrayMax
);

export interface DataParserDefinitionArray extends DataParserDefinition<DataParserArrayCheckers> {
	readonly element: DataParser;
}

export const arrayKind = createDataParserKind("array");

type _DataParserArray<
	GenericDefinition extends DataParserDefinitionArray,
> = (
	& DataParser<
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
			DataParserArrayCheckers,
			...DataParserArrayCheckers[],
		],
	>(
		...args: GenericChecker
	): DataParserArray<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

export function array<
	GenericElement extends DataParser,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionArray, "element">
	> = never,
>(
	element: GenericElement,
	definition?: GenericDefinition,
): DataParserArray<
		MergeDefinition<
			DataParserDefinitionArray,
			NeverCoalescing<GenericDefinition, {}> & { element: GenericElement }
		>
	> {
	return dataParserInit<DataParserArray>(
		arrayKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				element,
			},
		},
		{
			sync: (data, error, self) => {
				if (!(data instanceof Array)) {
					return SymbolDataParserErrorIssue;
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

				popErrorPath(error);

				return output as never;
			},
			async: async(data, error, self) => {
				if (!(data instanceof Array)) {
					return SymbolDataParserErrorIssue;
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

				popErrorPath(error);

				return output as never;
			},
		},
	) as never;
}
