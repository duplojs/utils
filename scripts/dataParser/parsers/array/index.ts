import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { popErrorPath, setErrorPath, SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserCheckerArrayMin, type DataParserCheckerArrayMax } from "./checkers";
import { createDataParserKind } from "../../kind";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export * from "./checkers";

export interface DataParserArrayCheckerCustom<
	GenericInput extends unknown[] = unknown[],
> {}

export type DataParserArrayCheckers<
	GenericInput extends unknown[] = unknown[],
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserArrayCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserArrayCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| DataParserCheckerArrayMin
	| DataParserCheckerArrayMax
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionArray extends DataParserDefinition<
	DataParserArrayCheckers<unknown[]>
> {
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
			DataParserArrayCheckers<Output<this>>,
			...DataParserArrayCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserArrayCheckers<Output<this>>,
				...DataParserArrayCheckers<Output<this>>[],
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
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionArray, "element">
	> = never,
>(
	element: GenericElement,
	definition?: GenericDefinition,
): DataParserArray<
		MergeDefinition<
			DataParserDefinitionArray,
			& NeverCoalescing<GenericDefinition, {}>
			& {
				readonly element: GenericElement;
			}
		>
	> {
	const self = dataParserInit<DataParserArray>(
		arrayKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			element,
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

				void (data.length && popErrorPath(error));

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
