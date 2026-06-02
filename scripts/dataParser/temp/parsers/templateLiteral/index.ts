import { type Adaptor, type AnyTuple, type FixDeepFunctionInfer, type NeverCoalescing, pipe, type SimplifyTopLevel } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParserDefinition } from "../../base";
import { addIssue, type DataParserError, type SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../../types";
import { type DataParserCheckerStringMax, type DataParserCheckerStringMin, type DataParserDefinitionString, type DataParserString } from "../string";
import { type DataParserCheckerInt, type DataParserDefinitionNumber, type DataParserNumber } from "../number";
import { type DataParserDefinitionBigInt, type DataParserBigInt } from "../bigint";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "../literal";
import { type DataParserDefinitionEmpty, type DataParserEmpty } from "../empty";
import { type DataParserDefinitionNil, type DataParserNil } from "../nil";
import { type DataParserDefinitionBoolean, type DataParserBoolean } from "../boolean";
import { type DataParserDefinitionUnion, type DataParserUnion } from "../union";
import { createTemplateLiteralPattern } from "./createTemplateLiteralPattern";

export * from "./createTemplateLiteralPattern";

export type TemplateLiteralPrimitiveParts = (
	| string
	| number
	| null
	| undefined
	| bigint
	| boolean
);

export type TemplateLiteralParts = (
	| TemplateLiteralPrimitiveParts
	| DataParserString<
		SimplifyTopLevel<
			& Omit<DataParserDefinitionString, "checkers">
			& {
				readonly checkers: readonly (
					| DataParserCheckerStringMax
					| DataParserCheckerStringMin
				)[];
			}
		>
	>
	| DataParserNumber<
		SimplifyTopLevel<
			& Omit<DataParserDefinitionNumber, "checkers">
			& { readonly checkers: readonly DataParserCheckerInt[] }
		>
	>
	| DataParserBigInt<
		SimplifyTopLevel<
			& Omit<DataParserDefinitionBigInt, "checkers">
			& { readonly checkers: readonly [] }
		>
	>
	| DataParserBoolean<
		SimplifyTopLevel<
			& Omit<DataParserDefinitionBoolean, "checkers">
			& { readonly checkers: readonly [] }
		>
	>
	| DataParserLiteral<
		SimplifyTopLevel<
			& Omit<DataParserDefinitionLiteral, "checkers">
			& { readonly checkers: readonly [] }
		>
	>
	| DataParserEmpty<
		SimplifyTopLevel<
			& Omit<DataParserDefinitionEmpty, "checkers">
			& { readonly checkers: readonly [] }
		>
	>
	| DataParserNil<
		SimplifyTopLevel<
			& Omit<DataParserDefinitionNil, "checkers">
			& { readonly checkers: readonly [] }
		>
	>
	| DataParserTemplateLiteral<
		SimplifyTopLevel<
			& Omit<DataParserDefinitionTemplateLiteral, "checkers">
			& { readonly checkers: readonly [] }
		>
	>
	| DataParserUnion<
		SimplifyTopLevel<
		& Omit<DataParserDefinitionUnion, "checkers" | "options">
		& {
			readonly options: AnyTuple<
				Exclude<
					TemplateLiteralParts,
					TemplateLiteralPrimitiveParts
				>
			>;
			readonly checkers: readonly [];
		}
		>
	>
);

export type TemplateLiteralShape = readonly [TemplateLiteralParts, ...TemplateLiteralParts[]];

type EligibleTemplateLiteral = string | number | bigint | boolean | null | undefined;

export type TemplateLiteralShapeOutput<
	GenericTemplate extends TemplateLiteralShape,
	GenericLastResult extends string = "",
> = GenericTemplate extends readonly [
	infer InferredFirst extends TemplateLiteralParts,
	...infer InferredRest extends TemplateLiteralParts[],
]
	? (
		`${GenericLastResult}${
			InferredFirst extends TemplateLiteralPrimitiveParts
				? InferredFirst extends bigint
					? `${InferredFirst}n`
					: InferredFirst
				: Adaptor<
					Output<
						Exclude<InferredFirst, TemplateLiteralPrimitiveParts>
					>,
					EligibleTemplateLiteral
				>
		}`
	) extends infer InferredResult extends string
		? InferredRest extends readonly []
			? InferredResult
			: InferredRest extends TemplateLiteralShape
				? TemplateLiteralShapeOutput<InferredRest, InferredResult>
				: TemplateLiteralShapeOutput<[InferredRest[number]], InferredResult>
		: never
	: never;

export type TemplateLiteralShapeInput<
	GenericTemplate extends TemplateLiteralShape,
	GenericLastResult extends string = "",
> = GenericTemplate extends readonly [
	infer InferredFirst extends TemplateLiteralParts,
	...infer InferredRest extends TemplateLiteralParts[],
]
	? (
		`${GenericLastResult}${
			InferredFirst extends TemplateLiteralPrimitiveParts
				? InferredFirst extends bigint
					? `${InferredFirst}n`
					: InferredFirst
				: Adaptor<
					Input<
						Exclude<InferredFirst, TemplateLiteralPrimitiveParts>
					>,
					EligibleTemplateLiteral
				>
		}`
	) extends infer InferredResult extends string
		? InferredRest extends readonly []
			? InferredResult
			: InferredRest extends TemplateLiteralShape
				? TemplateLiteralShapeInput<InferredRest, InferredResult>
				: TemplateLiteralShapeInput<[InferredRest[number]], InferredResult>
		: never
	: never;

export type DataParserTemplateLiteralCheckers<
	GenericInput extends string = string,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionTemplateLiteral<
	GenericInput extends string = string,
> extends DataParserDefinition<
		DataParserTemplateLiteralCheckers<GenericInput>
	> {
	readonly template: TemplateLiteralShape;
	readonly pattern: RegExp;
}

export const templateLiteralKind = createDataParserKind("template-literal");

export class DataParserTemplateLiteral<
	GenericDefinition extends DataParserDefinitionTemplateLiteral = DataParserDefinitionTemplateLiteral,
> extends DataParserBase.init(
		templateLiteralKind,
	)<
		GenericDefinition,
		TemplateLiteralShapeOutput<GenericDefinition["template"]>,
		TemplateLiteralShapeInput<GenericDefinition["template"]>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserTemplateLiteral);
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
	) => DataParserTemplateLiteral<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserTemplateLiteral,
		data: unknown,
		error: DataParserError,
	): string | typeof SymbolDataParserError {
		if (typeof data === "string" && self.definition.pattern.test(data)) {
			return data as never;
		}

		return addIssue(
			error,
			`string matching template literal pattern ${self.definition.pattern.source}`,
			data,
			self.definition.errorMessage,
		);
	}

	public static override dataParserIsAsynchronous(self: DataParserTemplateLiteral) {
		return false;
	}

	public static override create<
		const GenericTemplate extends TemplateLiteralShape,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionTemplateLiteral<
				TemplateLiteralShapeOutput<GenericTemplate>
			>,
			"template" | "pattern"
		> = never,
	>(
		template: GenericTemplate,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionTemplateLiteral<
					TemplateLiteralShapeOutput<GenericTemplate>
				>,
				"template" | "pattern"
			>,
			GenericDefinition
		>,
	): DataParserTemplateLiteral<
			MergeDefinition<
				DataParserDefinitionTemplateLiteral,
				NeverCoalescing<GenericDefinition, {}> & { template: GenericTemplate }
			>
		> {
		const pattern = pipe(
			createTemplateLiteralPattern(template),
			(result) => new RegExp(`^${result}$`),
		);

		return new DataParserTemplateLiteral({
			...definition,
			template,
			pattern,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}

export const templateLiteral = DataParserTemplateLiteral.create;
