import { callThen, type FixDeepFunctionInfer, type IsEqual, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type DataParserOptionalCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput | undefined>;

export interface DataParserDefinitionOptional<
	GenericOutput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserOptionalCheckers<GenericOutput>
	> {
	readonly inner: DataParser;
	readonly coalescingValue: GenericOutput;
}

export const optionalKind = createDataParserKind("optional");

export class DataParserOptional<
	GenericDefinition extends DataParserDefinitionOptional = DataParserDefinitionOptional,
> extends DataParserBase.init(
		optionalKind,
	)<
		GenericDefinition,
		IsEqual<
			GenericDefinition["coalescingValue"],
			unknown
		> extends true
			? Output<GenericDefinition["inner"]> | undefined
			: Output<GenericDefinition["inner"]>,
		Input<GenericDefinition["inner"]> | undefined
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserOptional);
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
	) => DataParserOptional<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserOptional,
		data: unknown,
		error: DataParserError,
	) {
		if (data === undefined) {
			return self.definition.coalescingValue;
		}

		return self.definition.inner.exec(data, error);
	}

	public static override dataParserIsAsynchronous(self: DataParserOptional) {
		return self.definition.inner.isAsynchronous();
	}

	public static override prepareDefinition(
		inner: DataParser,
		definition?: Partial<Omit<DataParserDefinitionOptional, "inner">>,
	): DataParserDefinitionOptional {
		return {
			...definition,
			inner,
			coalescingValue: definition?.coalescingValue,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/optional/index.md}
	 */
	public static override create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionOptional<
				Output<GenericDataParser>
			>,
			"inner"
		> = never,
	>(
		inner: GenericDataParser,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionOptional<
					Output<GenericDataParser>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): DataParserOptional<
			MergeDefinition<
				DataParserDefinitionOptional,
				NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
			>
		> {
		return new DataParserOptional(this.prepareDefinition(inner, definition)) as never;
	}
}

export const optional = DataParserOptional.create;
