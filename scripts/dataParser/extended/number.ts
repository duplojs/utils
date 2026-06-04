import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "./base";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserNumberExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNumber = dataParsers.DataParserDefinitionNumber,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserNumber)<
		GenericDefinition,
		Output<dataParsers.DataParserNumber<GenericDefinition>>,
		Input<dataParsers.DataParserNumber<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserNumberExtended);
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
	) => DataParserNumberExtended<
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
	) => DataParserNumberExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/number/min/index.md}
	 */
	public min(
		min: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionNumberMin, "min">
		>,
	) {
		return this.addChecker(dataParsers.checkerNumberMin(min, definition));
	}

	/**
	 * {@include dataParser/extended/number/max/index.md}
	 */
	public max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionNumberMax, "max">
		>,
	) {
		return this.addChecker(dataParsers.checkerNumberMax(max, definition));
	}

	/**
	 * {@include dataParser/extended/number/int/index.md}
	 */
	public int(
		definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>,
	) {
		return this.addChecker(dataParsers.checkerInt(definition));
	}

	/**
	 * {@include dataParser/extended/number/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionNumber> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionNumber>,
			GenericDefinition
		>,
	): DataParserNumberExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionNumber,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserNumberExtended(this.prepareDefinition(definition)) as never;
	}
}

export const number = detachObjectMethod(DataParserNumberExtended, "create");

/**
 * {@include dataParser/extended/int/index.md}
 */
export function int(definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>) {
	return number({ checkers: [dataParsers.checkerInt(definition)] });
}
