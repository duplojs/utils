import { detachObjectMethod, callThen, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../base";
import { addIssue, setErrorPath, type DataParserError, SymbolDataParserError, popErrorPath } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type UnionOptions = readonly [DataParser, ...DataParser[]];

export type DataParserUnionCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionUnion<
	GenericInput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserUnionCheckers<GenericInput>
	> {
	readonly options: UnionOptions;
}

export const unionKind = createDataParserKind("union");

export class DataParserUnion<
	GenericDefinition extends DataParserDefinitionUnion = DataParserDefinitionUnion,
> extends DataParserBase.init(
		unionKind,
	)<
		GenericDefinition,
		Output<GenericDefinition["options"][number]>,
		Input<GenericDefinition["options"][number]>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserUnion);
	}

	public declare addChecker: <
		const GenericChecker extends readonly [
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
	) => DataParserUnion<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserUnion,
		data: unknown,
		error: DataParserError,
	): unknown {
		const unionError = {
			...error,
			currentPath: [...error.currentPath],
			issues: [],
		};
		const currentIndexPath = unionError.currentPath.length;

		const output = self.definition.options.reduce<
			unknown
		>(
			(accumulator, dataParser, index) => callThen(
				accumulator,
				(awaitedAccumulator) => {
					if (awaitedAccumulator !== SymbolDataParserError) {
						return awaitedAccumulator;
					}

					setErrorPath(unionError, `(option: ${index})`, currentIndexPath);
					return dataParser.exec(data, unionError);
				},
			),
			SymbolDataParserError,
		);

		void (currentIndexPath !== unionError.currentPath.length && popErrorPath(unionError));

		return callThen(
			output,
			(awaitedOutput) => {
				if (awaitedOutput !== SymbolDataParserError) {
					return awaitedOutput;
				}

				error.issues.push(...unionError.issues);

				return addIssue(error, "respect at least one union value", data, self.definition.errorMessage);
			},
		);
	}

	public static override dataParserIsAsynchronous(self: DataParserUnion) {
		return self.definition.options.some(
			(element) => element.isAsynchronous(),
		);
	}

	public static override prepareDefinition(
		options: UnionOptions,
		definition?: Partial<Omit<DataParserDefinitionUnion, "options">>,
	): DataParserDefinitionUnion {
		return {
			...definition,
			options,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/union/index.md}
	 */
	public static override create<
		const GenericOptions extends UnionOptions,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionUnion<
				Output<GenericOptions[number]>
			>,
			"options"
		> = never,
	>(
		options: GenericOptions,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionUnion<
					Output<GenericOptions[number]>
				>,
				"options"
			>,
			GenericDefinition
		>,
	): DataParserUnion<
			MergeDefinition<
				DataParserDefinitionUnion,
				& NeverCoalescing<GenericDefinition, {}>
				& {
					readonly options: GenericOptions;
				}
			>
		> {
		return new DataParserUnion(this.prepareDefinition(options, definition)) as never;
	}
}

export const union = detachObjectMethod(DataParserUnion, "create");
