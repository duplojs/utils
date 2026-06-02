import { type AnyConstructor, type GetKind, type Kind, kindClass, type RemoveKind, type RequireConstructor, type SimplifyTopLevel } from "@scripts/common";
import { createDataParserKind } from "../kind";
import { DataParserBase, type DataParserDefinition } from "./base";
import type * as dataParsers from "./parsers";
import { type DataParserError } from "../error";
import { type DataParserCheckerBase } from "./baseChecker";
import { type DataParserCheckerDefinition } from "../base";

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
				}
				& CheckedConstructorKind
			);

			public static execParse = dataParserConstructor.execParse as GenericConstructor["execParse"];

			public static dataParserIsAsynchronous = dataParserConstructor.dataParserIsAsynchronous as GenericConstructor["dataParserIsAsynchronous"];

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
