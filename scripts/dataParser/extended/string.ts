
import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { DataParserBaseExtended } from "./base";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";

export class DataParserStringExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionString = dataParsers.DataParserDefinitionString,
> extends DataParserBaseExtended.initExtended(dataParsers.DataParserString)<
		GenericDefinition,
		Output<dataParsers.DataParserString<GenericDefinition>>,
		Input<dataParsers.DataParserString<GenericDefinition>>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserStringExtended);
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
	) => DataParserStringExtended<
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
	) => DataParserStringExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/string/min/index.md}
	 */
	public min(
		min: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionStringMin, "min">
		>,
	): DataParserStringExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerStringMin]
			>
		> {
		return this.addChecker(dataParsers.checkerStringMin(min, definition));
	}

	/**
	 * {@include dataParser/extended/string/max/index.md}
	 */
	public max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionStringMax, "max">
		>,
	): DataParserStringExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerStringMax]
			>
		> {
		return this.addChecker(dataParsers.checkerStringMax(max, definition));
	}

	/**
	 * {@include dataParser/extended/string/regex/index.md}
	 */
	public regex(
		regex: RegExp,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRegex, "regex">
		>,
	): DataParserStringExtended<
			AddCheckersToDefinition<
				GenericDefinition,
				readonly [dataParsers.DataParserCheckerRegex]
			>
		> {
		return this.addChecker(dataParsers.checkerRegex(regex, definition));
	}

	/**
	 * {@include dataParser/extended/string/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionString> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<dataParsers.DataParserDefinitionString>,
			GenericDefinition
		>,
	): DataParserStringExtended<
			MergeDefinition<
				dataParsers.DataParserDefinitionString,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserStringExtended(this.prepareDefinition(definition)) as never;
	}
}

export const string = detachObjectMethod(DataParserStringExtended, "create");

/**
 * {@include dataParser/extended/email/index.md}
 */
export function email(
	definition?: Partial<
		Omit<dataParsers.DataParserCheckerDefinitionEmail, "regex">
	>,
) {
	return string({
		checkers: [dataParsers.checkerEmail(definition)],
	});
}

/**
 * {@include dataParser/extended/url/index.md}
 */
export function url(
	definition?: Partial<dataParsers.DataParserCheckerDefinitionUrl>,
) {
	return string({
		checkers: [dataParsers.checkerUrl(definition)],
	});
}

/**
 * {@include dataParser/extended/uuid/index.md}
 */
export function uuid(
	definition?: Partial<
		Omit<dataParsers.DataParserCheckerDefinitionUuid, "regex">
	>,
) {
	return string({
		checkers: [dataParsers.checkerUuid(definition)],
	});
}
