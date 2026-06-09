import * as DCommon from "@scripts/common";
import { createDataParserKind } from "../kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../base";
import * as dataParsers from "../parsers";
import { type DataParserError } from "../error";
import { type DataParserChecker, type DataParserCheckerBase, type DataParserCheckerDefinition } from "../baseChecker";
import { type Output, type PrepareDataParserDefinition, type DataParserExtendedBaseInit, type MergeDefinition, type Input, type AddCheckersToDefinition } from "../types";

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
	 * {@include dataParser/extended/base/addChecker/index.md}
	 */
	public declare addChecker: (...args: never) => DataParserBaseExtended;

	public contractExtended<
		GenericValue extends unknown,
	>(
		...args: DCommon.IsEqual<Output<this>, GenericValue> extends true
			? []
			: [] & DCommon.ComputedTypeError<"ContractExtended error.">
	): DataParserExtended<GenericValue> {
		return this as never;
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
	): DataParserArrayExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionArray,
				DCommon.NeverCoalescing<GenericDefinition, {}> & { readonly element: GenericThis }
			>
		> {
		return DataParserArrayExtended.create(this, definition);
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
	): DataParserTransformExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionTransform,
				DCommon.NeverCoalescing<GenericDefinition, {}> & {
					inner: GenericThis;
					theFunction(input: Output<GenericThis>, error: DataParserError): GenericNewOutput;
				}
			>
		> {
		return DataParserTransformExtended.create(this, theFunction, definition);
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
	): DataParserUnionExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionUnion,
				DCommon.NeverCoalescing<GenericDefinition, {}> & {
					readonly options: [
						DataParserArrayExtended<
							DCommon.SimplifyTopLevel<
								& Omit<dataParsers.DataParserDefinitionArray, "element" | "checkers">
								& {
									readonly checkers: readonly [];
									readonly element: GenericThis;
								}
							>
						>,
						DataParserTransformExtended<
							DCommon.SimplifyTopLevel<
								& Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction" | "checkers">
								& {
									readonly checkers: readonly [];
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
		return DataParserUnionExtended.create(
			[
				this.array(),
				this.transform((data) => [data]),
			],
			definition,
		);
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
	): DataParserPipeExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionPipe,
			DCommon.NeverCoalescing<GenericDefinition, {}> & {
				input: GenericThis;
				output: GenericOutputParser;
			}
			>
		> {
		return DataParserPipeExtended.create(this, output, definition);
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
	): DataParserNullableExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionNullable,
				DCommon.NeverCoalescing<GenericDefinition, {}> & { inner: GenericThis }
			>
		> {
		return DataParserNullableExtended.create(this, definition);
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
	): DataParserOptionalExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionOptional,
				DCommon.NeverCoalescing<GenericDefinition, {}> & { inner: GenericThis }
			>
		> {
		return DataParserOptionalExtended.create(this, definition);
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
	): DataParserUnionExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionUnion,
				DCommon.NeverCoalescing<GenericDefinition, {}> & {
					options: [GenericThis, GenericDataParser];
				}
			>
		> {
		return DataParserUnionExtended.create(
			[this, option],
			definition,
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
	): DataParserRecoverExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionRecover,
				DCommon.NeverCoalescing<GenericDefinition, {}> & {
					inner: GenericThis;
					recoveredValue: GenericRecoveredValue;
				}
			>
		> {
		return DataParserRecoverExtended.create(
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

export class DataParserArrayExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionArray = dataParsers.DataParserDefinitionArray,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserArray)<
		GenericDefinition,
		Output<dataParsers.DataParserArray<GenericDefinition>>,
		Input<dataParsers.DataParserArray<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserArrayExtended);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: DCommon.FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserArrayExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public declare refine: (
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	) => DataParserArrayExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/array/min/index.md}
	 */
	public min(
		min: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">
		>,
	) {
		return this.addChecker(dataParsers.checkerArrayMin(min, definition));
	}

	/**
	 * {@include dataParser/extended/array/max/index.md}
	 */
	public max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">
		>,
	) {
		return this.addChecker(dataParsers.checkerArrayMax(max, definition));
	}

	/**
	 * {@include dataParser/extended/array/index.md}
	 */
	public static override create<
		GenericElement extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionArray<
				Output<GenericElement>[]
			>,
			"element"
		> = never,
	>(
		element: GenericElement,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionArray<
					Output<GenericElement>[]
				>,
				"element"
			>,
			GenericDefinition
		>,
	): DataParserArrayExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionArray,
				DCommon.NeverCoalescing<GenericDefinition, {}> & {
					element: GenericElement;
				}
			>
		> {
		return new DataParserArrayExtended(this.prepareDefinition(element, definition)) as never;
	}
}

export class DataParserTransformExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTransform = dataParsers.DataParserDefinitionTransform,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserTransform)<
		GenericDefinition,
		Output<dataParsers.DataParserTransform<GenericDefinition>>,
		Input<dataParsers.DataParserTransform<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserTransformExtended);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: DCommon.FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserTransformExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public declare refine: (
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	) => DataParserTransformExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/transform/index.md}
	 */
	public static override create<
		GenericDataParser extends DataParser,
		GenericOutput extends unknown,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionTransform<
				dataParsers.DataParserTransformOutput<() => GenericOutput>
			>,
			"inner" | "theFunction"
		> = never,
	>(
		inner: GenericDataParser,
		theFunction: (
			input: Output<GenericDataParser>,
			error: DataParserError
		) => GenericOutput,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionTransform<
					dataParsers.DataParserTransformOutput<() => GenericOutput>
				>,
				"inner" | "theFunction"
			>,
			GenericDefinition
		>,
	): DataParserTransformExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionTransform,
			DCommon.NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				theFunction(input: Output<GenericDataParser>, error: DataParserError): GenericOutput;
			}
			>
		> {
		return new DataParserTransformExtended(this.prepareDefinition(inner, theFunction, definition)) as never;
	}
}

export class DataParserUnionExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionUnion = dataParsers.DataParserDefinitionUnion,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserUnion)<
		GenericDefinition,
		Output<dataParsers.DataParserUnion<GenericDefinition>>,
		Input<dataParsers.DataParserUnion<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserUnionExtended);
	}

	public declare addChecker: <
		const GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: DCommon.FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserUnionExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public declare refine: (
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	) => DataParserUnionExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/union/index.md}
	 */
	public static override create<
		const GenericOptions extends dataParsers.UnionOptions,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionUnion<
				Output<GenericOptions[number]>
			>,
			"options"
		> = never,
	>(
		options: GenericOptions,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionUnion<
					Output<GenericOptions[number]>
				>,
				"options"
			>,
			GenericDefinition
		>,
	): DataParserUnionExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionUnion,
			DCommon.NeverCoalescing<GenericDefinition, {}> & {
				options: GenericOptions;
			}
			>
		> {
		return new DataParserUnionExtended(this.prepareDefinition(options, definition)) as never;
	}
}

export class DataParserPipeExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionPipe = dataParsers.DataParserDefinitionPipe,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserPipe)<
		GenericDefinition,
		Output<dataParsers.DataParserPipe<GenericDefinition>>,
		Input<dataParsers.DataParserPipe<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserPipeExtended);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: DCommon.FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserPipeExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public declare refine: (
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	) => DataParserPipeExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/pipe/index.md}
	 */
	public static override create<
		GenericInput extends DataParser,
		GenericOutput extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionPipe<
				Output<GenericOutput>
			>,
			"input" | "output"
		> = never,
	>(
		input: GenericInput,
		output: GenericOutput,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionPipe<
					Output<GenericOutput>
				>,
				"input" | "output"
			>,
			GenericDefinition
		>,
	): DataParserPipeExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionPipe,
			DCommon.NeverCoalescing<GenericDefinition, {}> & {
				input: GenericInput;
				output: GenericOutput;
			}
			>
		> {
		return new DataParserPipeExtended(this.prepareDefinition(input, output, definition)) as never;
	}
}

export class DataParserNullableExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNullable = dataParsers.DataParserDefinitionNullable,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserNullable)<
		GenericDefinition,
		Output<dataParsers.DataParserNullable<GenericDefinition>>,
		Input<dataParsers.DataParserNullable<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserNullableExtended);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: DCommon.FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserNullableExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public declare refine: (
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	) => DataParserNullableExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public default<
		GenericInput extends Output<GenericDefinition["inner"]>,
	>(
		input: GenericInput,
	): DataParserNullableExtended<
			DCommon.SimplifyTopLevel<
			Omit<GenericDefinition, "coalescingValue">
			& { readonly coalescingValue: GenericInput }
			>
		> {
		return DataParserNullableExtended.create(this.definition.inner, {
			...this.definition,
			coalescingValue: input,
		}) as never;
	}

	/**
	 * {@include dataParser/extended/nullable/index.md}
	 */
	public static override create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionNullable<
				Output<GenericDataParser>
			>,
			"inner"
		> = never,
	>(
		inner: GenericDataParser,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionNullable<
					Output<GenericDataParser>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): DataParserNullableExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionNullable,
			DCommon.NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
			}
			>
		> {
		return new DataParserNullableExtended(this.prepareDefinition(inner, definition)) as never;
	}
}

export class DataParserOptionalExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionOptional = dataParsers.DataParserDefinitionOptional,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserOptional)<
		GenericDefinition,
		Output<dataParsers.DataParserOptional<GenericDefinition>>,
		Input<dataParsers.DataParserOptional<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserOptionalExtended);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: DCommon.FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserOptionalExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public declare refine: (
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	) => DataParserOptionalExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	public default<
		GenericInput extends Output<GenericDefinition["inner"]>,
	>(
		input: GenericInput,
	): DataParserOptionalExtended<
			DCommon.SimplifyTopLevel<
			Omit<GenericDefinition, "coalescingValue">
			& { readonly coalescingValue: GenericInput }
			>
		> {
		return DataParserOptionalExtended.create(this.definition.inner, {
			...this.definition,
			coalescingValue: input,
		}) as never;
	}

	/**
	 * {@include dataParser/extended/optional/index.md}
	 */
	public static override create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionOptional<
				Output<GenericDataParser>
			>,
			"inner"
		> = never,
	>(
		inner: GenericDataParser,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionOptional<
					Output<GenericDataParser>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): DataParserOptionalExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionOptional,
			DCommon.NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
			}
			>
		> {
		return new DataParserOptionalExtended(this.prepareDefinition(inner, definition)) as never;
	}
}

export class DataParserRecoverExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionRecover = dataParsers.DataParserDefinitionRecover,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserRecover)<
		GenericDefinition,
		Output<dataParsers.DataParserRecover<GenericDefinition>>,
		Input<dataParsers.DataParserRecover<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserRecoverExtended);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: DCommon.FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserRecoverExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public declare refine: (
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>,
	) => DataParserRecoverExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/recover/index.md}
	 */
	public static override create<
		GenericDataParser extends DataParser,
		GenericRecoveredValue extends Output<GenericDataParser>,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionRecover<
				Output<GenericDataParser>
			>,
			"inner" | "recoveredValue"
		> = never,
	>(
		inner: GenericDataParser,
		recoveredValue: GenericRecoveredValue,
		definition?: DCommon.FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionRecover<
					Output<GenericDataParser>
				>,
				"inner" | "recoveredValue"
			>,
			GenericDefinition
		>,
	): DataParserRecoverExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionRecover,
			DCommon.NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				recoveredValue: GenericRecoveredValue;
			}
			>
		> {
		return new DataParserRecoverExtended(this.prepareDefinition(inner, recoveredValue, definition)) as never;
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
