import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type Input, SymbolDataParserError, type DataParserChecker, type DataParserCheckerDefinition, type DataParser } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue, setErrorPath } from "@scripts/dataParser/error";
import { createDataParserKind } from "../kind";
import * as DArray from "@scripts/array";

export type UnionOptions = readonly [DataParser, ...DataParser[]];

export type DataParserUnionCheckers<
	GenericInput extends unknown = unknown,
> = DataParserChecker<
	DataParserCheckerDefinition,
	GenericInput
>;

export interface DataParserDefinitionUnion<
	GenericInput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserUnionCheckers<GenericInput>
	> {
	readonly options: UnionOptions;
}

export const unionKind = createDataParserKind("union");

type _DataParserUnion<
	GenericDefinition extends DataParserDefinitionUnion,
> = (
	& DataParserBase<
		GenericDefinition,
		Output<GenericDefinition["options"][number]>,
		Input<GenericDefinition["options"][number]>
	>
	& Kind<typeof unionKind.definition>
);

export interface DataParserUnion<
	GenericDefinition extends DataParserDefinitionUnion = DataParserDefinitionUnion,
> extends _DataParserUnion<GenericDefinition> {
	addChecker<
		const GenericChecker extends readonly [
			DataParserUnionCheckers<Output<this>>,
			...DataParserUnionCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserUnionCheckers<Output<this>>,
				...DataParserUnionCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserUnion<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/union/index.md}
 */
export function union<
	const GenericOptions extends UnionOptions,
	const GenericDefinition extends Partial<
		Omit<
			DataParserDefinitionUnion<
				Output<GenericOptions[number]>
			>,
			"options"
		>
	> = never,
>(
	options: GenericOptions,
	definition?: GenericDefinition,
): DataParserUnion<
		MergeDefinition<
			DataParserDefinitionUnion,
			& NeverCoalescing<GenericDefinition, {}>
			& {
				readonly options: GenericOptions;
			}
		>
	> {
	const self = dataParserBaseInit<DataParserUnion>(
		unionKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			options,
		},
		{
			sync: (data, error, self) => {
				const unionError = {
					...error,
					currentPath: [...error.currentPath],
					issues: [],
				};
				const currentIndexPath = unionError.currentPath.length;

				for (let index = 0; index < self.definition.options.length; index++) {
					setErrorPath(unionError, `(option: ${index})`, currentIndexPath);

					const dataParser = self.definition.options[index]!;
					const result = dataParser.exec(data, unionError);

					if (result !== SymbolDataParserError) {
						return result;
					}
				}

				error.issues.push(...unionError.issues);

				return addIssue(error, "respect at least one union value", data, self.definition.errorMessage);
			},
			async: async(data, error, self) => {
				const unionError = {
					...error,
					currentPath: [...error.currentPath],
					issues: [],
				};
				const currentIndexPath = unionError.currentPath.length;

				for (let index = 0; index < self.definition.options.length; index++) {
					setErrorPath(unionError, `(option: ${index})`, currentIndexPath);

					const dataParser = self.definition.options[index]!;
					const result = await dataParser.asyncExec(data, unionError);

					if (result !== SymbolDataParserError) {
						return result;
					}
				}

				error.issues.push(...unionError.issues);

				return addIssue(error, "respect at least one union value", data, self.definition.errorMessage);
			},
			isAsynchronous: (self) => DArray.some(
				self.definition.options,
				(element) => element.isAsynchronous(),
			),
		},
		union.overrideHandler,
	) as never;

	return self as never;
}

union.overrideHandler = createOverride<DataParserUnion>("@duplojs/utils/data-parser/union");
