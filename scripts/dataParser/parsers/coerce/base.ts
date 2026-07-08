import { detachObjectMethod, type Memoized, type ComputedTypeError, type FixDeepFunctionInfer, type IsNever, type KindHandler, type NeverCoalescing, memo } from "@scripts/common";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../../base";
import { createDataParserKind } from "../../kind";
import { addIssue, type DataParserError } from "../../error";
import { type DataParserChecker } from "../../baseChecker";
import type { ApplyRefinementOfDefinition, AddCheckersToDefinition, GetEligibleChecker, Input, MergeDefinition, Output, PrepareDataParserDefinition } from "../../types";
import { bigIntKind, type DataParserBigInt } from "../bigint";
import { booleanKind, type DataParserBoolean } from "../boolean";
import { dateKind, type DataParserDate } from "../date";
import { emptyKind, type DataParserEmpty } from "../empty";
import { nilKind, type DataParserNil } from "../nil";
import { numberKind, type DataParserNumber } from "../number";
import { stringKind, type DataParserString } from "../string";
import { timeKind, type DataParserTime } from "../time";
import * as DDate from "@scripts/date";
import * as DEither from "@scripts/either";

export type DataParserCoerceTransformer = (data: unknown) => unknown;

export const dataParserCoerceTransformerMapper = new Map<KindHandler, DataParserCoerceTransformer>([
	[
		bigIntKind,
		(data) => {
			try {
				return BigInt(data as never);
			} catch {
				return data;
			}
		},
	],
	[
		booleanKind,
		(data) => {
			if (typeof data === "string") {
				const lower = data.trim().toLowerCase();

				if (lower === "true" || lower === "false") {
					return lower === "true";
				}
			} else if (typeof data === "number" && (data === 0 || data === 1)) {
				return data === 1;
			}

			return data;
		},
	],
	[
		emptyKind,
		(data) => data === "undefined"
			? undefined
			: data,
	],
	[
		nilKind,
		(data) => data === "null"
			? null
			: data,
	],
	[
		numberKind,
		(data) => {
			try {
				return Number(data);
			} catch {
				return data;
			}
		},
	],
	[
		stringKind,
		(data) => {
			try {
				return String(data);
			} catch {
				return data;
			}
		},
	],
	[
		timeKind,
		(data) => {
			if (
				typeof data === "string"
				&& DDate.isoTimeRegex.test(data)
			) {
				const result = DDate.createTime({ value: data });

				if (DEither.isRight(result)) {
					return DEither.unwrapRight(result);
				}
			}

			return data;
		},
	],
	[
		dateKind,
		(data) => {
			if (
				typeof data === "number"
				&& DDate.isSafeTimestamp(data)
			) {
				return DDate.TheDate.new(data);
			}

			if (typeof data === "string") {
				const date = new Date(data);
				const timestamp = date.getTime();
				if (DDate.isSafeTimestamp(timestamp)) {
					return DDate.TheDate.new(timestamp);
				}
			}

			return data;
		},
	],
]);

export interface EligibleDataParserCoerce<
	GenericDataParser extends DataParser,
> {
	bigint: GenericDataParser extends DataParserBigInt
		? Input<GenericDataParser>
		: never;
	boolean: GenericDataParser extends DataParserBoolean
		? string | number | boolean
		: never;
	empty: GenericDataParser extends DataParserEmpty
		? "undefined" | Input<GenericDataParser>
		: never;
	nil: GenericDataParser extends DataParserNil
		? "null" | Input<GenericDataParser>
		: never;
	number: GenericDataParser extends DataParserNumber
		? string | number
		: never;
	string: GenericDataParser extends DataParserString
		? Input<GenericDataParser>
		: never;
	date: GenericDataParser extends DataParserDate
		? string | number | Input<GenericDataParser>
		: never;
	time: GenericDataParser extends DataParserTime
		? string | Input<GenericDataParser>
		: never;
}

export interface EligibleDataParserCoerceOverride<
	GenericDataParser extends DataParser,
> {}

export type GetEligibleDataParserCoerce<
	GenericDataParser extends DataParser,
> = (
	& Omit<
		EligibleDataParserCoerce<GenericDataParser>,
		keyof EligibleDataParserCoerceOverride<GenericDataParser>
	>
	& EligibleDataParserCoerceOverride<GenericDataParser>
) extends infer InferredResult
	? InferredResult[keyof InferredResult]
	: never;

type MustBeEligibleDataParserCoerce<
	GenericDataParser extends DataParser,
> = IsNever<GetEligibleDataParserCoerce<GenericDataParser>> extends true
	? ComputedTypeError<"This data parser is not eligible for coercion.">
	: GenericDataParser;

export type DataParserCoerceCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput>;

export type DataParserCoerceInput<
	GenericDataParser extends DataParser,
> = (
	| Input<GenericDataParser>
	| GetEligibleDataParserCoerce<GenericDataParser>
);

export interface DataParserDefinitionCoerce<
	GenericOutput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserCoerceCheckers<GenericOutput>
	> {
	readonly inner: DataParser;
}

export const coerceKind = createDataParserKind("coerce");

export class DataParserCoerce<
	GenericDefinition extends DataParserDefinitionCoerce = DataParserDefinitionCoerce,
> extends DataParserBase.init(
		coerceKind,
	)<
		GenericDefinition,
		ApplyRefinementOfDefinition<
			Output<GenericDefinition["inner"]>,
			GenericDefinition
		>,
		ApplyRefinementOfDefinition<
			DataParserCoerceInput<GenericDefinition["inner"]>,
			GenericDefinition
		>
	> {
	readonly #transformer: Memoized<DataParserCoerceTransformer | undefined> = memo(
		() => dataParserCoerceTransformerMapper.get(
			this.definition.inner.classConstructor.specificKindHandler,
		),
	);

	public get classConstructor(): typeof DataParserCoerce {
		return this.checkConstructor(DataParserCoerce);
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
	) => DataParserCoerce<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserCoerce,
		data: unknown,
		error: DataParserError,
	): unknown {
		if (!self.#transformer.value) {
			return addIssue(
				error,
				"supported coerce data parser",
				data,
				self.definition.errorMessage,
				self,
			);
		}

		try {
			return self.definition.inner.exec(self.#transformer.value(data), error);
		} catch (catchError) {
			return addIssue(
				error,
				"successful coerce transform",
				catchError,
				self.definition.errorMessage,
				self,
			);
		}
	}

	public static override dataParserIsAsynchronous(self: DataParserCoerce) {
		return self.definition.inner.isAsynchronous();
	}

	public static override prepareDefinition(
		inner: DataParser,
		definition?: Partial<Omit<DataParserDefinitionCoerce, "inner">>,
	): DataParserDefinitionCoerce {
		return {
			...definition,
			inner,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	public static override create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionCoerce<
				Output<GenericDataParser>
			>,
			"inner"
		> = never,
	>(
		inner: GenericDataParser & MustBeEligibleDataParserCoerce<GenericDataParser>,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionCoerce<
					Output<GenericDataParser>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): DataParserCoerce<
			MergeDefinition<
				DataParserDefinitionCoerce,
				NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
			>
		> {
		return new DataParserCoerce(this.prepareDefinition(inner, definition)) as never;
	}
}

export const coercer = detachObjectMethod(DataParserCoerce, "create");
