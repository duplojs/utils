import { detachObjectMethod, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../base";
import { addIssue, type DataParserError, type SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
import * as DArray from "@scripts/array";

export type LiteralValue = string | number | bigint | undefined | null | boolean;

export type DataParserLiteralCheckers<
	GenericInput extends LiteralValue = LiteralValue,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionLiteral<
	GenericInput extends LiteralValue = LiteralValue,
> extends DataParserDefinition<
		DataParserLiteralCheckers<GenericInput>
	> {
	readonly value: readonly LiteralValue[];
}

export const literalKind = createDataParserKind("literal");

export class DataParserLiteral<
	GenericDefinition extends DataParserDefinitionLiteral = DataParserDefinitionLiteral,
> extends DataParserBase.init(
		literalKind,
	)<
		GenericDefinition,
		GenericDefinition["value"][number],
		GenericDefinition["value"][number]
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserLiteral);
	}

	public declare addChecker: <
		const GenericChecker extends readonly [
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
	) => DataParserLiteral<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserLiteral,
		data: unknown,
		error: DataParserError,
	): LiteralValue | typeof SymbolDataParserError {
		if (self.definition.value.includes(data as never)) {
			return data as never;
		}

		return addIssue(
			error,
			`one of ${self.definition.value.join(", ")}`,
			data,
			self.definition.errorMessage,
			self,
		);
	}

	public static override dataParserIsAsynchronous(self: DataParserLiteral) {
		return false;
	}

	public static override prepareDefinition(
		value: LiteralValue | readonly LiteralValue[],
		definition?: Partial<Omit<DataParserDefinitionLiteral, "value">>,
	): DataParserDefinitionLiteral {
		return {
			...definition,
			value: DArray.coalescing(value),
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/literal/index.md}
	 */
	public static override create<
		const GenericValue extends LiteralValue,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionLiteral<GenericValue>,
			"value"
		> = never,
	>(
		value: GenericValue | readonly GenericValue[],
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionLiteral<GenericValue>,
				"value"
			>,
			GenericDefinition
		>,
	): DataParserLiteral<
			MergeDefinition<
				DataParserDefinitionLiteral,
				NeverCoalescing<GenericDefinition, {}> & { readonly value: readonly GenericValue[] }
			>
		> {
		return new DataParserLiteral(this.prepareDefinition(value, definition)) as never;
	}
}

/**
 * {@include dataParser/classic/literal/index.md}
 */
export const literal = detachObjectMethod(DataParserLiteral, "create");
