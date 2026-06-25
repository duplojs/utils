import { detachObjectMethod, type FixDeepFunctionInfer, memo, type Memoized, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type ApplyRefinementOfDefinition, type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type DataParserLazyCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionLazy<
	GenericInput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserLazyCheckers<GenericInput>
	> {
	getter: Memoized<DataParser>;
}

export const lazyKind = createDataParserKind("lazy");

export class DataParserLazy<
	GenericDefinition extends DataParserDefinitionLazy = DataParserDefinitionLazy,
> extends DataParserBase.init(
		lazyKind,
	)<
		GenericDefinition,
		ApplyRefinementOfDefinition<
			Output<GenericDefinition["getter"]["value"]>,
			GenericDefinition
		>,
		ApplyRefinementOfDefinition<
			Input<GenericDefinition["getter"]["value"]>,
			GenericDefinition
		>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserLazy);
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
	) => DataParserLazy<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserLazy,
		data: unknown,
		error: DataParserError,
	) {
		return self.definition.getter.value.exec(data, error);
	}

	public static override dataParserIsAsynchronous(self: DataParserLazy) {
		return self.definition.getter.value.isAsynchronous();
	}

	public static override prepareDefinition(
		getter: () => DataParser,
		definition?: Partial<Omit<DataParserDefinitionLazy, "getter">>,
	): DataParserDefinitionLazy {
		return {
			...definition,
			getter: memo(getter),
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/lazy/index.md}
	 */
	public static override create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionLazy<
				Output<GenericDataParser>
			>,
			"getter"
		> = never,
	>(
		getter: () => GenericDataParser,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionLazy<
					Output<GenericDataParser>
				>,
				"getter"
			>,
			GenericDefinition
		>,
	): DataParserLazy<
			MergeDefinition<
				DataParserDefinitionLazy,
				NeverCoalescing<GenericDefinition, {}> & {
					getter: Memoized<GenericDataParser>;
				}
			>
		> {
		return new DataParserLazy(this.prepareDefinition(getter, definition)) as never;
	}
}

/**
 * {@include dataParser/classic/lazy/index.md}
 */
export const lazy = detachObjectMethod(DataParserLazy, "create");
