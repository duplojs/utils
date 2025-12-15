import { type Kind, type NeverCoalescing, type AnyFunction, type SimplifyTopLevel, type AnyValue, pipe, createOverride } from "@scripts/common";
import { type MergeDefinition } from "./types";
import { type Output, type DataParser, type DataParserDefinition } from "./base";
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
	& DataParser<GenericDefinition, GenericOutput, GenericInput>
	& Kind<typeof extendedKind.definition>
);

export interface DataParserExtended<
	GenericDefinition extends DataParserDefinition = DataParserDefinition,
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends _DataParserExtended<
		GenericDefinition,
		GenericOutput,
		GenericInput
	> {
	array<
		GenericThis extends this = this,
		const GenericDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionArray, "element">
		> = never,
	>(definition?: GenericDefinition): dataParsersExtended.DataParserArrayExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionArray,
			NeverCoalescing<GenericDefinition, {}> & { element: GenericThis }
		>
	>;

	transform<
		GenericThis extends this = this,
		GenericOutput extends AnyValue = AnyValue,
		const GenericDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction">
		> = never,
	>(
		theFunction: (
			input: Output<GenericThis>,
			error: DataParserError
		) => GenericOutput,
		definition?: GenericDefinition
	): dataParsersExtended.DataParserTransformExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionTransform,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericThis;
				theFunction(input: Output<GenericThis>): GenericOutput;
			}
		>
	>;

	arrayCoalescing<
		GenericThis extends this = this,
	>(): dataParsersExtended.DataParserUnionExtended<
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

	pipe<
		GenericThis extends this = this,
		GenericOutput extends DataParser = DataParser,
		const GenericDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionPipe, "input" | "output">
		> = never,
	>(
		output: GenericOutput,
		definition?: GenericDefinition,
	): dataParsersExtended.DataParserPipeExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionPipe,
			NeverCoalescing<GenericDefinition, {}> & {
				input: GenericThis;
				output: GenericOutput;
			}
		>
	>;

	nullable<
		GenericThis extends this = this,
		const GenericDefinition extends Partial<
			Omit<
				dataParsers.DataParserDefinitionNullable<
					Output<GenericThis> | null
				>,
				"inner"
			>
		> = never,
	>(
		definition?: GenericDefinition,
	): dataParsersExtended.DataParserNullableExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNullable,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericThis }
		>
	>;

	optional<
		GenericThis extends this = this,
		const GenericDefinition extends Partial<
			Omit<
				dataParsers.DataParserDefinitionOptional<
					Output<GenericThis> | undefined
				>,
				"inner"
			>
		> = never,
	>(
		definition?: GenericDefinition,
	): dataParsersExtended.DataParserOptionalExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionOptional,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericThis }
		>
	>;

	or<
		GenericThis extends this = this,
		GenericDataParser extends DataParser = DataParser,
		const GenericDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionUnion, "options">
		> = never,
	>(
		option: GenericDataParser,
		definition?: GenericDefinition,
	): dataParsersExtended.DataParserUnionExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionUnion,
			NeverCoalescing<GenericDefinition, {}> & {
				options: [GenericThis, GenericDataParser];
			}
		>
	>;

	refine(...args: never): DataParserExtended;

	recover<
		GenericThis extends this = this,
		GenericRecoveredValue extends unknown = unknown,
		const GenericDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionRecover, "inner" | "recoveredValue">
		> = never,
	>(
		recoveredValue: GenericRecoveredValue,
		definition?: GenericDefinition,
	): dataParsersExtended.DataParserRecoverExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionRecover,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericThis;
				recoveredValue: GenericRecoveredValue;
			}
		>
	>;

	construct(definition: never): DataParserExtended;
}

export function dataParserExtendedInit<
	GenericDataParser extends DataParser,
	GenericDataParserExtended extends GenericDataParser & DataParserExtended,
>(
	dataParser: NoInfer<
		GenericDataParser
	>,
	rest: NoInfer<
		{
			[
			Prop in Exclude<
				keyof GenericDataParserExtended,
				keyof (GenericDataParser & DataParserExtended)
			>
			]: GenericDataParserExtended[Prop] extends AnyFunction
				? (
					self: GenericDataParserExtended,
					...args: Parameters<GenericDataParserExtended[Prop]>
				) => ReturnType<GenericDataParserExtended[Prop]>
				: GenericDataParserExtended[Prop]
		}
	>,
): GenericDataParserExtended {
	const self: DataParserExtended = pipe(
		{
			...dataParser as any,
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
				]);
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
				return dataParserExtendedInit(
					dataParser.addChecker(...checkers as never),
					rest,
				);
			},
			clone() {
				return dataParserExtendedInit(
					dataParser.clone(),
					rest,
				);
			},
			refine(theFunction) {
				return dataParserExtendedInit(
					(dataParser.addChecker as AnyFunction<[unknown], never>)(
						dataParsers.checkerRefine(theFunction),
					),
					rest,
				);
			},
			recover(recoveredValue, definition) {
				return dataParsersExtended.recover(
					self,
					recoveredValue,
					definition,
				);
			},
			construct(definition) {
				return dataParserExtendedInit(
					dataParser.construct(definition),
					rest,
				);
			},
		} satisfies DataParserExtended,
		extendedKind.setTo,
		dataParserExtendedInit.overrideHandler.apply,
	);

	return self as never;
}

dataParserExtendedInit.overrideHandler = createOverride<DataParserExtended>("@duplojs/utils/data-parser-extended/base");

export type ContractExtended<
	GenericOutput extends unknown,
	GenericInput extends unknown = GenericOutput,
> = DataParserExtended<
	DataParserDefinition<never>,
	GenericOutput,
	GenericInput
>;
