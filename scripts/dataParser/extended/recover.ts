import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
import { type DataParserChecker } from "../baseChecker";

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
		...args: FixDeepFunctionInfer<
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
		definition?: FixDeepFunctionInfer<
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
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				recoveredValue: GenericRecoveredValue;
			}
			>
		> {
		return new DataParserRecoverExtended(this.prepareDefinition(inner, recoveredValue, definition)) as never;
	}
}

export const recover = detachObjectMethod(DataParserRecoverExtended, "create");
