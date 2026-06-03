import { type AnyConstructor, type AnyFunction, type AnyValue, type ComputedTypeError, type FixDeepFunctionInfer, type GetKind, type IsEqual, type Kind, kindClass, type NeverCoalescing, type RemoveKind, type RequireConstructor, type SimplifyTopLevel } from "@scripts/common";
import { createDataParserKind } from "./kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "./base";
import * as dataParsers from "./parsers";
import * as dataParsersExtended from "./extended";
import { type DataParserError } from "./error";
import { type DataParserCheckerBase, type DataParserCheckerDefinition } from "./baseChecker";
import { type MergeDefinition, type Output, type PrepareDataParserDefinition } from "./types";

export const dataParserExtendedKind = createDataParserKind("extended");

export abstract class DataParserBaseExtended<
	GenericDefinition extends DataParserDefinition = DataParserDefinition,
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends kindClass(
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
		...args: IsEqual<Output<this>, GenericValue> extends true
			? []
			: [] & ComputedTypeError<"ContractExtended error.">
	): DataParserExtended<GenericValue>;

	public contractExtended() {
		return this as never;
	}

	/**
	 * {@include dataParser/extended/base/array/index.md}
	 */
	public array<
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionArray<
				Output<this>[]
			>,
			"element"
		> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionArray<
					Output<this>[]
				>,
				"element"
			>,
			GenericDefinition
		>,
	) {
		return dataParsersExtended.array(this, definition);
	}

	/**
	 * {@include dataParser/extended/base/transform/index.md}
	 */
	public transform<
		GenericNewOutput extends AnyValue = AnyValue,
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
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionTransform<
					dataParsers.DataParserTransformOutput<() => GenericNewOutput>
				>,
				"inner" | "theFunction"
			>,
			GenericDefinition
		>,
	) {
		return dataParsersExtended.transform(this, theFunction, definition);
	}

	/**
	 * {@include dataParser/extended/base/arrayCoalescing/index.md}
	 */
	public arrayCoalescing<
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionUnion<
				Output<this>[]
			>,
			"options"
		> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionUnion<
					Output<this>[]
				>,
				"options"
			>,
			GenericDefinition
		>,
	) {
		return dataParsersExtended.union(
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
		GenericOutputParser extends DataParser = DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionPipe<
				Output<GenericOutputParser>
			>,
			"input" | "output"
		> = never,
	>(
		output: GenericOutputParser,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionPipe<
					Output<GenericOutputParser>
				>,
				"input" | "output"
			>,
			GenericDefinition
		>,
	) {
		return dataParsersExtended.pipe(this, output, definition);
	}

	/**
	 * {@include dataParser/extended/base/nullable/index.md}
	 */
	public nullable<
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionNullable<
				Output<this>
			>,
			"inner"
		> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionNullable<
					Output<this>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	) {
		return dataParsersExtended.nullable(this, definition);
	}

	/**
	 * {@include dataParser/extended/base/optional/index.md}
	 */
	public optional<
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionOptional<
				Output<this>
			>,
			"inner"
		> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionOptional<
					Output<this>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	) {
		return dataParsersExtended.optional(this, definition);
	}

	/**
	 * {@include dataParser/extended/base/or/index.md}
	 */
	public or<
		GenericDataParser extends DataParser = DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionUnion<
				Output<this | GenericDataParser>
			>,
			"options"
		> = never,
	>(
		option: GenericDataParser,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionUnion<
					Output<this | GenericDataParser>
				>,
				"options"
			>,
			GenericDefinition
		>,
	) {
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
		return (this.addChecker as AnyFunction<[unknown], never>)(
			dataParsers.checkerRefine(theFunction, definition),
		);
	}

	/**
	 * {@include dataParser/extended/base/recover/index.md}
	 */
	public recover<
		GenericRecoveredValue extends Output<this> = Output<this>,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionRecover<
				Output<this>
			>,
			"inner" | "recoveredValue"
		> = never,
	>(
		recoveredValue: GenericRecoveredValue,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionRecover<
					Output<this>
				>,
				"inner" | "recoveredValue"
			>,
			GenericDefinition
		>,
	) {
		return dataParsersExtended.recover(
			this,
			recoveredValue,
			definition,
		);
	}

	public static initExtended<
		GenericConstructor extends SimplifyTopLevel<ReturnType<typeof DataParserBase.init>>,
	>(
		dataParserConstructor: GenericConstructor,
	) {
		type CheckedConstructorKind = & Kind<{
			name: "checked-constructor";
			value: never;
		}>;

		abstract class DataParserBaseExtendedInit<
			GenericDefinition extends DataParserDefinition = DataParserDefinition,
			GenericOutput extends unknown = unknown,
			GenericInput extends unknown = GenericOutput,
		> extends kindClass(
				dataParserConstructor.specificKindHandler as GenericConstructor["specificKindHandler"],
				DataParserBaseExtended,
			)<
				DataParserBaseExtended<
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

			public checkConstructor<
				GenericConstructor extends object,
			>(
				constructor: (
					GenericConstructor
					& RequireConstructor<GenericConstructor>
				),
			): GenericConstructor & CheckedConstructorKind {
				return constructor as never;
			}

			public abstract override get classConstructor(): (
				& AnyConstructor<[any], (
					& DataParserBaseExtended<any>
					& Kind<typeof dataParserConstructor.specificKindHandler.definition>
				)>
				& {
					create(...args: never[]): (
						& DataParserBaseExtended<any>
						& Kind<typeof dataParserConstructor.specificKindHandler.definition>
					);
					execParse(
						self: (
							& DataParserBase<any>
							& Kind<typeof dataParserConstructor.specificKindHandler.definition>
						),
						data: unknown,
						error: DataParserError,
					): unknown;
					dataParserIsAsynchronous(
						self: (
							& DataParserBase<any>
							& Kind<typeof dataParserConstructor.specificKindHandler.definition>
						),
					): boolean;
					prepareDefinition(
						...args: never[]
					): DataParserDefinition;
				}
				& CheckedConstructorKind
			);

			public static execParse = dataParserConstructor.execParse as GenericConstructor["execParse"];

			public static dataParserIsAsynchronous = dataParserConstructor.dataParserIsAsynchronous as GenericConstructor["dataParserIsAsynchronous"];

			public static prepareDefinition = dataParserConstructor.prepareDefinition as GenericConstructor["prepareDefinition"];

			public static declare create: GenericConstructor["create"];

			public static specificKindHandler = dataParserConstructor.specificKindHandler as GenericConstructor["specificKindHandler"];
		}

		return DataParserBaseExtendedInit;
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
	& GetKind<GenericDataParser>
	& Omit<RemoveKind<DataParserBaseExtended>, "addChecker" | "clone" | "definition">
	& Pick<GenericDataParser, "definition">
	& {
		addChecker(...args: never): DataParserBaseExtended;
		clone(): ContractExtended<GenericDataParser>;
	}
);
