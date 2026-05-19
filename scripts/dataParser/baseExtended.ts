import { type Kind, type NeverCoalescing, type AnyFunction, type SimplifyTopLevel, type AnyValue, pipe, createOverride, type OverrideHandler, type GetKind, type RemoveKind, type IsEqual, type ComputedTypeError, type FixDeepFunctionInfer, type MaybeArray } from "@scripts/common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "./types";
import { type Output, type DataParserBase, type DataParserDefinition, type DataParserCheckerBase, type DataParserCheckerDefinition } from "./base";
import type * as DEither from "../either";
import * as dataParsers from "./parsers";
import * as dataParsersExtended from "./extended";
import { type DataParserError } from "./error";
import * as DObject from "../object";
import * as DArray from "../array";
import { createDataParserKind } from "./kind";

export const extendedKind = createDataParserKind("extended");

type _DataParserExtended<
	GenericDefinition extends DataParserDefinition,
	GenericOutput extends unknown,
	GenericInput extends unknown,
> = (
	& DataParserBase<GenericDefinition, GenericOutput, GenericInput>
	& Kind<typeof extendedKind.definition>
);

export interface DataParserBaseExtended<
	GenericDefinition extends DataParserDefinition = DataParserDefinition,
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends _DataParserExtended<
		GenericDefinition,
		GenericOutput,
		GenericInput
	> {

	/**
	 * {@include dataParser/extended/base/parse/index.md}
	 */
	parse(
		data: unknown,
	): DEither.Success<GenericOutput> | DEither.Error<DataParserError>;

	/**
	 * {@include dataParser/extended/base/asyncParse/index.md}
	 */
	asyncParse(
		data: unknown,
	): Promise<
		| DEither.Success<GenericOutput>
		| DEither.Error<DataParserError>
	>;

	/**
	 * {@include dataParser/extended/base/parseOrThrow/index.md}
	 */
	parseOrThrow(
		data: unknown,
	): GenericOutput;

	/**
	 * {@include dataParser/extended/base/asyncParseOrThrow/index.md}
	 */
	asyncParseOrThrow(
		data: unknown,
	): Promise<GenericOutput>;

	/**
	 * {@include dataParser/extended/base/addChecker/index.md}
	 */
	addChecker(...args: never): DataParserBaseExtended;

	/**
	 * {@include dataParser/extended/base/clone/index.md}
	 */
	clone(): this;

	contractExtended<
		GenericValue extends unknown,
	>(
		...args: IsEqual<Output<this>, GenericValue> extends true
			? []
			: [] & ComputedTypeError<"ContractExtended error.">
	): DataParserExtended<GenericValue>;

	/**
	 * {@include dataParser/extended/base/array/index.md}
	 */
	array<
		GenericThis extends this = this,
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
		>
	): dataParsersExtended.DataParserArrayExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionArray,
			NeverCoalescing<GenericDefinition, {}> & { readonly element: GenericThis }
		>
	>;

	/**
	 * {@include dataParser/extended/base/transform/index.md}
	 */
	transform<
		GenericThis extends this = this,
		GenericOutput extends AnyValue = AnyValue,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionTransform<
				dataParsers.DataParserTransformOutput<() => GenericOutput>
			>,
			"inner" | "theFunction"
		> = never,
	>(
		theFunction: (
			input: Output<this>,
			error: DataParserError
		) => GenericOutput,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionTransform<
					dataParsers.DataParserTransformOutput<() => GenericOutput>
				>,
				"inner" | "theFunction"
			>,
			GenericDefinition
		>
	): dataParsersExtended.DataParserTransformExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionTransform,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericThis;
				theFunction(input: Output<GenericThis>): GenericOutput;
			}
		>
	>;

	/**
	 * {@include dataParser/extended/base/arrayCoalescing/index.md}
	 */
	arrayCoalescing<
		GenericThis extends this = this,
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
	): dataParsersExtended.DataParserUnionExtended<
		SimplifyTopLevel<
			& Omit<dataParsers.DataParserDefinitionUnion, "options">
			& {
				readonly options: [
					dataParsersExtended.DataParserArrayExtended<
						SimplifyTopLevel<
							& Omit<dataParsers.DataParserDefinitionArray, "element">
							& {
								readonly element: GenericThis;
							}
						>
					>,
					dataParsersExtended.DataParserTransformExtended<
						SimplifyTopLevel<
							& Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction">
							& {
								readonly inner: GenericThis;
								theFunction(input: Output<GenericThis>, error: DataParserError): Output<GenericThis>[];
							}
						>
					>,
				];
			}
		>
	>;

	/**
	 * {@include dataParser/extended/base/pipe/index.md}
	 */
	pipe<
		GenericThis extends this = this,
		GenericOutput extends DataParserBase = DataParserBase,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionPipe<
				Output<GenericOutput>
			>,
			"input" | "output"
		> = never,
	>(
		output: GenericOutput,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionPipe<
					Output<GenericOutput>
				>,
				"input" | "output"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserPipeExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionPipe,
			NeverCoalescing<GenericDefinition, {}> & {
				input: GenericThis;
				output: GenericOutput;
			}
		>
	>;

	/**
	 * {@include dataParser/extended/base/nullable/index.md}
	 */
	nullable<
		GenericThis extends this = this,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionNullable<
					Output<this> | null
			>,
			"inner"
		> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionNullable<
					Output<this> | null
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserNullableExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNullable,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericThis }
		>
	>;

	/**
	 * {@include dataParser/extended/base/optional/index.md}
	 */
	optional<
		GenericThis extends this = this,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionOptional<
					Output<this> | undefined
			>,
			"inner"
		> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionOptional<
					Output<this> | undefined
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): dataParsersExtended.DataParserOptionalExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionOptional,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericThis }
		>
	>;

	/**
	 * {@include dataParser/extended/base/or/index.md}
	 */
	or<
		GenericThis extends this = this,
		GenericDataParser extends DataParserBase = DataParserBase,
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
	): dataParsersExtended.DataParserUnionExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionUnion,
			NeverCoalescing<GenericDefinition, {}> & {
				options: [GenericThis, GenericDataParser];
			}
		>
	>;

	refine(...args: never): DataParserBaseExtended;

	/**
	 * {@include dataParser/extended/base/recover/index.md}
	 */
	recover<
		GenericThis extends this = this,
		GenericRecoveredValue extends unknown = unknown,
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
	): dataParsersExtended.DataParserRecoverExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionRecover,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericThis;
				recoveredValue: GenericRecoveredValue;
			}
		>
	>;
}

export function dataParserBaseExtendedInit<
	GenericDataParser extends DataParserBase,
	GenericDataParserExtended extends GenericDataParser & DataParserBaseExtended,
>(
	dataParser: NoInfer<
		GenericDataParser
	>,
	rest: NoInfer<
		{
			[
			Prop in Exclude<
				keyof GenericDataParserExtended,
				keyof (GenericDataParser & DataParserBaseExtended)
			>
			]: GenericDataParserExtended[Prop] extends AnyFunction
				? (
					self: GenericDataParserExtended,
					...args: Parameters<GenericDataParserExtended[Prop]>
				) => ReturnType<GenericDataParserExtended[Prop]>
				: GenericDataParserExtended[Prop]
		}
	>,
	specificOverrideHandler: OverrideHandler<NoInfer<GenericDataParserExtended>>,
): GenericDataParserExtended {
	const self: DataParserBaseExtended = pipe(
		{
			...dataParser,
			...pipe(
				rest,
				DObject.entries,
				DArray.map(
					([key, value]) => DObject.entry(
						key,
						typeof value === "function"
							? (...args: never[]) => (value as AnyFunction)(self, ...args)
							: value,
					),
				),
				DObject.fromEntries,
			),
			array(definition) {
				return dataParsersExtended.array(
					self,
					definition,
				);
			},
			transform(theFunction, definition) {
				return dataParsersExtended.transform(
					self as never,
					theFunction,
					definition,
				);
			},
			arrayCoalescing() {
				return dataParsersExtended.union([
					self.array(),
					self.transform((data) => [data]),
				]) as never;
			},
			pipe(output, definition) {
				return dataParsersExtended.pipe(
					self,
					output,
					definition,
				);
			},
			nullable(definition) {
				return dataParsersExtended.nullable(
					self,
					definition,
				);
			},
			optional(definition) {
				return dataParsersExtended.optional(
					self,
					definition,
				);
			},
			or(option, definition) {
				return dataParsersExtended.union(
					[self, option],
					definition,
				);
			},
			addChecker(...checkers: any[]) {
				return dataParserBaseExtendedInit(
					dataParser.addChecker(...checkers as never),
					rest,
					specificOverrideHandler,
				);
			},
			clone() {
				return dataParserBaseExtendedInit(
					dataParser.clone(),
					rest,
					specificOverrideHandler,
				);
			},
			refine(theFunction) {
				return dataParserBaseExtendedInit(
					(dataParser.addChecker as AnyFunction<[unknown], never>)(
						dataParsers.checkerRefine(theFunction),
					),
					rest,
					specificOverrideHandler,
				);
			},
			recover(recoveredValue, definition) {
				return dataParsersExtended.recover(
					self,
					recoveredValue,
					definition,
				);
			},
			contract() {
				return self;
			},
			contractExtended() {
				return self as never;
			},
		} satisfies RemoveKind<DataParserBaseExtended>,
		extendedKind.setTo,
		dataParserBaseExtendedInit.overrideHandler.apply,
		specificOverrideHandler.apply as AnyFunction,
	);

	return self as never;
}

dataParserBaseExtendedInit.overrideHandler = createOverride<DataParserBaseExtended>("@duplojs/utils/data-parser-extended/base");

/**
 * @deprecated use dataParserBaseExtendedInit
 */
export const dataParserExtendedInit = dataParserBaseExtendedInit;

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
