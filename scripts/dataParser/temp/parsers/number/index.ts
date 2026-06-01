import { type FixDeepFunctionInfer, type NeverCoalescing, kindClass } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../../base";
import { addIssue, type DataParserError, type SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";

export * from "./checkers";

export type DataParserNumberCheckers = GetEligibleChecker<number>;

export interface DataParserDefinitionNumber extends DataParserDefinition<
	DataParserNumberCheckers
> {
	readonly coerce: boolean;
}

export const numberKind = createDataParserKind("number");

export class DataParserNumber<
	GenericDefinition extends DataParserDefinitionNumber = DataParserDefinitionNumber,
> extends kindClass(
		numberKind,
		DataParserBase,
	)<
		DataParserBase<
			GenericDefinition,
			number,
			number
		>
	> {
	public constructor(
		definition: GenericDefinition,
	) {
		super(null as never, definition);
	}

	public get classConstructor() {
		return DataParserNumber;
	}

	protected dataParserIsAsynchronous() {
		return false;
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
	) => DataParserNumber<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static execParse(
		self: DataParserNumber,
		data: unknown,
		error: DataParserError,
	): (
			| number
			| typeof SymbolDataParserError
		) {
		const inputData = data;
		if (self.definition.coerce) {
			try {
				// eslint-disable-next-line no-param-reassign
				data = Number(data);
			} catch {}
		}

		if (typeof data === "number" && !Number.isNaN(data)) {
			return data;
		}

		return addIssue(
			error,
			"number",
			inputData,
			self.definition.errorMessage,
		);
	}

	public static create<
		const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionNumber> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<DataParserDefinitionNumber>,
			GenericDefinition
		>,
	): DataParserNumber<
			MergeDefinition<
				DataParserDefinitionNumber,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserNumber({
			...definition,
			coerce: definition?.coerce ?? false,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}

export const number = DataParserNumber.create;
