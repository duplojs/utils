import * as DCommon from "@scripts/common";
import { createDataParserKind } from "./kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "./base";
import * as dataParsers from "./parsers";
import * as dataParsersExtended from "./extended";
import { type DataParserError } from "./error";
import { type DataParserCheckerBase, type DataParserCheckerDefinition } from "./baseChecker";
import { type Output, type PrepareDataParserDefinition, type DataParserExtendedBaseInit, type MergeDefinition } from "./types";

export const dataParserExtendedKind = createDataParserKind("extended");

export abstract class DataParserBaseExtended<
	GenericDefinition extends DataParserDefinition = DataParserDefinition,
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends DCommon.kindClass(
		dataParserExtendedKind,
		DataParserBase,
	)<
		DataParserBase<
			GenericDefinition,
			GenericOutput,
			GenericInput
		>
	> {
	public constructor(
		definition: GenericDefinition,
	) {
		super(null as never, definition);
	}

	/**
	 * {@include dataParser/extended/base/parse/index.md}
	 */
	public declare parse: DataParserBase<
		GenericDefinition,
		GenericOutput,
		GenericInput
	>["parse"];

	/**
	 * {@include dataParser/extended/base/asyncParse/index.md}
	 */
	public declare asyncParse: DataParserBase<
		GenericDefinition,
		GenericOutput,
		GenericInput
	>["asyncParse"];

	/**
	 * {@include dataParser/extended/base/parseOrThrow/index.md}
	 */
	public declare parseOrThrow: DataParserBase<
		GenericDefinition,
		GenericOutput,
		GenericInput
	>["parseOrThrow"];

	/**
	 * {@include dataParser/extended/base/asyncParseOrThrow/index.md}
	 */
	public declare asyncParseOrThrow: DataParserBase<
		GenericDefinition,
		GenericOutput,
		GenericInput
	>["asyncParseOrThrow"];

	/**
	 * {@include dataParser/extended/base/addChecker/index.md}
	 */
	public declare addChecker: (...args: never) => DataParserBaseExtended;

	/**
	 * {@include dataParser/extended/base/clone/index.md}
	 */
	public declare clone: () => this;

	public contractExtended<
		GenericValue extends unknown,
	>(
		...args: DCommon.IsEqual<Output<this>, GenericValue> extends true
			? []
			: [] & DCommon.ComputedTypeError<"ContractExtended error.">
	): DataParserExtended<GenericValue>;

	public contractExtended() {
		return this as never;
	}

	/**
	 * {@include dataParser/extended/base/array/index.md}
	 */
	public array<
		GenericThis extends this = this,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionArray<
				Output<this>[]
			>,
			"element"
		> = never,
	>(
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionArray<
					Output<this>[]
				>,
				"element"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserArrayExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionArray,
				DCommon.NeverCoalescing<GenericDefinition, {}> & { readonly element: GenericThis }
			>
		> {
		return dataParsersExtended.array(this, definition);
	}

	/**
	 * {@include dataParser/extended/base/transform/index.md}
	 */
	public transform<
		GenericThis extends this = this,
		GenericNewOutput extends DCommon.AnyValue = DCommon.AnyValue,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionTransform<
				dataParsers.DataParserTransformOutput<() => GenericNewOutput>
			>,
			"inner" | "theFunction"
		> = never,
	>(
		theFunction: (
			input: Output<this>,
			error: DataParserError,
		) => GenericNewOutput,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionTransform<
					dataParsers.DataParserTransformOutput<() => GenericNewOutput>
				>,
				"inner" | "theFunction"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserTransformExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionTransform,
				DCommon.NeverCoalescing<GenericDefinition, {}> & {
					inner: GenericThis;
					theFunction(input: Output<GenericThis>): GenericOutput;
				}
			>
		> {
		return dataParsersExtended.transform(this, theFunction, definition) as never;
	}

	/**
	 * {@include dataParser/extended/base/arrayCoalescing/index.md}
	 */
	public arrayCoalescing<
		GenericThis extends this = this,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionUnion<
				Output<this>[]
			>,
			"options"
		> = never,
	>(
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionUnion<
					Output<this>[]
				>,
				"options"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserUnionExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionUnion,
				DCommon.NeverCoalescing<GenericDefinition, {}> & {
					readonly options: [
						dataParsersExtended.DataParserArrayExtended<
							DCommon.SimplifyTopLevel<
								& Omit<dataParsers.DataParserDefinitionArray, "element">
								& {
									readonly element: GenericThis;
								}
							>
						>,
						dataParsersExtended.DataParserTransformExtended<
							DCommon.SimplifyTopLevel<
								& Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction">
								& {
									readonly inner: GenericThis;
									theFunction(
										input: Output<GenericThis>,
										error: DataParserError
									): Output<GenericThis>[];
								}
							>
						>,
					];
				}
			>
		> {
		return dataParsersExtended.union(
			[
				this.array(),
				this.transform((data) => [data]),
			],
			definition as never,
		) as never;
	}

	/**
	 * {@include dataParser/extended/base/pipe/index.md}
	 */
	public pipe<
		GenericThis extends this = this,
		GenericOutputParser extends DataParser = DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionPipe<
				Output<GenericOutputParser>
			>,
			"input" | "output"
		> = never,
	>(
		output: GenericOutputParser,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionPipe<
					Output<GenericOutputParser>
				>,
				"input" | "output"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserPipeExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionPipe,
			DCommon.NeverCoalescing<GenericDefinition, {}> & {
				input: GenericThis;
				output: GenericOutputParser;
			}
			>
		> {
		return dataParsersExtended.pipe(this, output, definition);
	}

	/**
	 * {@include dataParser/extended/base/nullable/index.md}
	 */
	public nullable<
		GenericThis extends this = this,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionNullable<
				Output<this>
			>,
			"inner"
		> = never,
	>(
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionNullable<
					Output<this>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserNullableExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionNullable,
				DCommon.NeverCoalescing<GenericDefinition, {}> & { inner: GenericThis }
			>
		> {
		return dataParsersExtended.nullable(this, definition);
	}

	/**
	 * {@include dataParser/extended/base/optional/index.md}
	 */
	public optional<
		GenericThis extends this = this,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionOptional<
				Output<this>
			>,
			"inner"
		> = never,
	>(
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionOptional<
					Output<this>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserOptionalExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionOptional,
				DCommon.NeverCoalescing<GenericDefinition, {}> & { inner: GenericThis }
			>
		> {
		return dataParsersExtended.optional(this, definition);
	}

	/**
	 * {@include dataParser/extended/base/or/index.md}
	 */
	public or<
		GenericThis extends this = this,
		GenericDataParser extends DataParser = DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionUnion<
				Output<this | GenericDataParser>
			>,
			"options"
		> = never,
	>(
		option: GenericDataParser,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionUnion<
					Output<this | GenericDataParser>
				>,
				"options"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserUnionExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionUnion,
				DCommon.NeverCoalescing<GenericDefinition, {}> & {
					options: [GenericThis, GenericDataParser];
				}
			>
		> {
		return dataParsersExtended.union(
			[this, option],
			definition,
		);
	}

	public refine(
		theFunction: (input: GenericOutput) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	): DataParserBaseExtended {
		return (this.addChecker as DCommon.AnyFunction<[unknown], never>)(
			dataParsers.checkerRefine(theFunction, definition),
		);
	}

	/**
	 * {@include dataParser/extended/base/recover/index.md}
	 */
	public recover<
		GenericThis extends this = this,
		GenericRecoveredValue extends Output<this> = Output<this>,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionRecover<
				Output<this>
			>,
			"inner" | "recoveredValue"
		> = never,
	>(
		recoveredValue: GenericRecoveredValue,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionRecover<
					Output<this>
				>,
				"inner" | "recoveredValue"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserRecoverExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionRecover,
				DCommon.NeverCoalescing<GenericDefinition, {}> & {
					inner: GenericThis;
					recoveredValue: GenericRecoveredValue;
				}
			>
		> {
		return dataParsersExtended.recover(
			this,
			recoveredValue,
			definition,
		);
	}

	public static initExtended<
		GenericConstructor extends DCommon.SimplifyTopLevel<ReturnType<typeof DataParserBase.init>>,
	>(
		dataParserConstructor: GenericConstructor,
	): DataParserExtendedBaseInit<GenericConstructor> {
		abstract class _DataParserBaseExtendedInit extends DCommon.kindClass(
			dataParserConstructor.specificKindHandler,
			DataParserBaseExtended,
		) {
			public constructor(
				definition: DataParserDefinition,
			) {
				super(null as never, definition);
			}

			public checkConstructor(constructor: object) {
				return constructor;
			}

			public static execParse = dataParserConstructor.execParse;

			public static dataParserIsAsynchronous = dataParserConstructor.dataParserIsAsynchronous;

			public static prepareDefinition = dataParserConstructor.prepareDefinition;

			public static specificKindHandler = dataParserConstructor.specificKindHandler;
		}

		return _DataParserBaseExtendedInit as never;
	}
}

export interface DataParserExtended<
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends DataParserBaseExtended<
		DataParserDefinition,
		GenericOutput,
		GenericInput
	> {
	addChecker(
		...args: DataParserCheckerBase<
			DataParserCheckerDefinition,
			GenericOutput
		>[]
	): DataParserExtended<GenericOutput, GenericInput>;
	refine(
		theFunction: (input: GenericOutput) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>
	): DataParserExtended<GenericOutput, GenericInput>;
}

export type ContractExtended<
	GenericDataParser extends DataParserBaseExtended,
> = (
	& DCommon.GetKind<GenericDataParser>
	& Omit<DCommon.RemoveKind<DataParserBaseExtended>, "addChecker" | "clone" | "definition">
	& Pick<GenericDataParser, "definition">
	& {
		addChecker(...args: never): DataParserBaseExtended;
		clone(): ContractExtended<GenericDataParser>;
	}
);
