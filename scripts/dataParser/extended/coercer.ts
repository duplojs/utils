import { type NeverCoalescing, type FixDeepFunctionInfer, detachObjectMethod } from "@scripts/common";
import type { DataParserChecker } from "../baseChecker";
import * as dataParsers from "../parsers";
import type { AddCheckersToDefinition, Input, MergeDefinition, Output, PrepareDataParserDefinition } from "../types";
import { DataParserBaseExtended } from "./base";
import type { DataParser } from "../base";

export class DataParserCoercerExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionCoercer = dataParsers.DataParserDefinitionCoercer,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserCoercer)<
		GenericDefinition,
		Output<dataParsers.DataParserCoercer<GenericDefinition>>,
		Input<dataParsers.DataParserCoercer<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserCoercerExtended);
	}

	/**
	 * {@include dataParser/extended/coercer/transformers/index.md}
	 */
	public static transformers = dataParsers.DataParserCoercer.transformers;

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
	) => DataParserCoercerExtended<
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
	) => DataParserCoercerExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/coercer/index.md}
	 */
	public static override create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionCoercer<
				Output<GenericDataParser>
			>,
			"inner"
		> = never,
	>(
		inner: GenericDataParser,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionCoercer<
					Output<GenericDataParser>
				>,
				"inner"
			>,
			GenericDefinition
		>,
	): DataParserCoercerExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionCoercer,
				NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
			>
		> {
		return new DataParserCoercerExtended(this.prepareDefinition(inner, definition)) as never;
	}
}

/**
 * {@include dataParser/extended/coercer/index.md}
 */
export const coercer = detachObjectMethod(DataParserCoercerExtended, "create");
