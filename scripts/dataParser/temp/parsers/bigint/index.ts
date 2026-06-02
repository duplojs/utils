import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../../base";
import { addIssue, type DataParserError, type SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";

export * from "./checkers";

export type DataParserBigIntCheckers = GetEligibleChecker<bigint>;

export interface DataParserDefinitionBigInt extends DataParserDefinition<
	DataParserBigIntCheckers
> {
	readonly coerce: boolean;
}

export const bigIntKind = createDataParserKind("bigint");

export class DataParserBigInt<
	GenericDefinition extends DataParserDefinitionBigInt = DataParserDefinitionBigInt,
> extends DataParserBase.init(
		bigIntKind,
	)<
		GenericDefinition,
		bigint,
		bigint
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserBigInt);
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
	) => DataParserBigInt<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static execParse(
		self: DataParserBigInt,
		data: unknown,
		error: DataParserError,
	): (
			| bigint
			| typeof SymbolDataParserError
		) {
		const inputData = data;
		if (self.definition.coerce) {
			try {
				// eslint-disable-next-line no-param-reassign
				data = BigInt(data as never);
			} catch {}
		}

		if (typeof data === "bigint") {
			return data;
		}

		return addIssue(
			error,
			"bigint",
			inputData,
			self.definition.errorMessage,
		);
	}

	public static create<
		const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionBigInt> = never,
	>(
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<DataParserDefinitionBigInt>,
			GenericDefinition
		>,
	): DataParserBigInt<
			MergeDefinition<
				DataParserDefinitionBigInt,
				NeverCoalescing<GenericDefinition, {}>
			>
		> {
		return new DataParserBigInt({
			...definition,
			coerce: definition?.coerce ?? false,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}

export const bigint = DataParserBigInt.create;
