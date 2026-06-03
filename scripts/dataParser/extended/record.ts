import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
import { type DataParserChecker } from "../baseChecker";

export class DataParserRecordExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionRecord = dataParsers.DataParserDefinitionRecord,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserRecord)<
		GenericDefinition,
		Output<dataParsers.DataParserRecord<GenericDefinition>>,
		Input<dataParsers.DataParserRecord<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserRecordExtended);
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
	) => DataParserRecordExtended<
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
	) => DataParserRecordExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/record/index.md}
	 */
	public static override create<
		GenericDataParserKey extends dataParsers.DataParserRecordKey,
		GenericDataParserValue extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionRecord<
				Record<
					Extract<
						Output<GenericDataParserKey>,
						string | number
					>,
					Output<GenericDataParserValue>
				>
			>,
			"key" | "value" | "baseData"
		> = never,
	>(
		key: GenericDataParserKey,
		value: GenericDataParserValue,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				dataParsers.DataParserDefinitionRecord<
					Record<
						Extract<
							Output<GenericDataParserKey>,
							string | number
						>,
						Output<GenericDataParserValue>
					>
				>,
				"key" | "value" | "baseData"
			>,
			GenericDefinition
		>,
	): DataParserRecordExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionRecord,
			NeverCoalescing<GenericDefinition, {}> & {
				key: GenericDataParserKey;
				value: GenericDataParserValue;
			}
			>
		> {
		return new DataParserRecordExtended(this.prepareDefinition(key, value, definition)) as never;
	}
}

export const record = detachObjectMethod(DataParserRecordExtended, "create");
