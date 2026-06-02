import { callThen, type FixDeepFunctionInfer, type IsEqual, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type DataParserNullableCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput | null>;

export interface DataParserDefinitionNullable<
	GenericOutput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserNullableCheckers<GenericOutput>
	> {
	readonly inner: DataParser;
	readonly coalescingValue: GenericOutput;
}

export const nullableKind = createDataParserKind("nullable");

export class DataParserNullable<
	GenericDefinition extends DataParserDefinitionNullable = DataParserDefinitionNullable,
> extends DataParserBase.init(
		nullableKind,
	)<
		GenericDefinition,
		IsEqual<
			GenericDefinition["coalescingValue"],
			unknown
		> extends true
			? Output<GenericDefinition["inner"]> | null
			: Output<GenericDefinition["inner"]>,
		Input<GenericDefinition["inner"]> | null
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserNullable);
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
	) => DataParserNullable<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserNullable,
		data: unknown,
		error: DataParserError,
	) {
		if (data === null) {
			return self.definition.coalescingValue;
		}

		return self.definition.inner.exec(data, error);
	}

	public static override dataParserIsAsynchronous(self: DataParserNullable) {
		return self.definition.inner.isAsynchronous();
	}

	public static override create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionNullable<
				Output<GenericDataParser>
			>,
			"inner"
		> = never,
	>(
		inner: GenericDataParser,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionNullable<
					Output<GenericDataParser>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): DataParserNullable<
			MergeDefinition<
				DataParserDefinitionNullable,
				NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
			>
		> {
		return new DataParserNullable({
			...definition,
			inner,
			coalescingValue: definition?.coalescingValue ?? null,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}

export const nullable = DataParserNullable.create;
