import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../base";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
import { type DataParserError } from "@scripts/dataParser/error";

export type DataParserUnknownCheckers = GetEligibleChecker<unknown>;

export interface DataParserDefinitionUnknown extends DataParserDefinition<
	DataParserUnknownCheckers
> {}

export const unknownKind = createDataParserKind("unknown");

export class DataParserUnknown<
	GenericDefinition extends DataParserDefinitionUnknown = DataParserDefinitionUnknown,
> extends DataParserBase.init(
		unknownKind,
	)<
		GenericDefinition,
		unknown,
		unknown
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserUnknown);
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
	) => DataParserUnknown<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		_self: DataParserUnknown,
		data: unknown,
		_error: DataParserError,
	) {
		return data;
	}

	public static override dataParserIsAsynchronous(self: DataParserUnknown) {
		return false;
	}

	public static override prepareDefinition(
		definition?: Partial<DataParserDefinitionUnknown>,
	): DataParserDefinitionUnknown {
		return {
			...definition,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/unknown/index.md}
	 */
	public static override create<
		const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionUnknown> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<DataParserDefinitionUnknown>,
			GenericDefinition
		>,
	): DataParserUnknown<
			MergeDefinition<
				DataParserDefinitionUnknown,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserUnknown(this.prepareDefinition(definition)) as never;
	}
}

export const unknown = detachObjectMethod(DataParserUnknown, "create");
