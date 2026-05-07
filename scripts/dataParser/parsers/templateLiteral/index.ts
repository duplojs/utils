import { type Adaptor, type AnyTuple, type FixDeepFunctionInfer, type Kind, type NeverCoalescing, pipe, createOverride, type SimplifyTopLevel } from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, dataParserBaseInit, type Output, type Input } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { addIssue } from "@scripts/dataParser/error";
import { type DataParserCheckerStringMax, type DataParserCheckerStringMin, type DataParserDefinitionString, type DataParserString } from "../string";
import { type DataParserCheckerInt, type DataParserDefinitionNumber, type DataParserNumber } from "../number";
import { type DataParserDefinitionBigInt, type DataParserBigInt } from "../bigint";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "../literal";
import { type DataParserDefinitionEmpty, type DataParserEmpty } from "../empty";
import { type DataParserDefinitionNil, type DataParserNil } from "../nil";
import { type DataParserDefinitionBoolean, type DataParserBoolean } from "../boolean";
import { createDataParserKind } from "../../kind";
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

type _DataParserTemplateLiteral<
	GenericDefinition extends DataParserDefinitionTemplateLiteral,
> = (
	& DataParserBase<
		GenericDefinition,
		TemplateLiteralShapeOutput<GenericDefinition["template"]>,
		TemplateLiteralShapeInput<GenericDefinition["template"]>
	>
	& Kind<typeof templateLiteralKind.definition>
);

export interface DataParserTemplateLiteral<
	GenericDefinition extends DataParserDefinitionTemplateLiteral = DataParserDefinitionTemplateLiteral,
> extends _DataParserTemplateLiteral<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserTemplateLiteralCheckers<Output<this>>,
			...DataParserTemplateLiteralCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserTemplateLiteralCheckers<Output<this>>,
				...DataParserTemplateLiteralCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserTemplateLiteral<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

/**
 * {@include dataParser/classic/templateLiteral/index.md}
 */
export function templateLiteral<
	const GenericTemplate extends TemplateLiteralShape,
	const GenericDefinition extends Partial<
		Omit<
			DataParserDefinitionTemplateLiteral<
				TemplateLiteralShapeOutput<GenericTemplate>
			>,
			"template" | "pattern"
		>
	> = never,
>(
	template: GenericTemplate,
	definition?: GenericDefinition,
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

	const self = dataParserBaseInit<DataParserTemplateLiteral>(
		templateLiteralKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			template,
			pattern,
		},
		(data, error, self) => {
			if (typeof data === "string" && self.definition.pattern.test(data)) {
				return data as never;
			}

			return addIssue(
				error,
				`string matching template literal pattern ${self.definition.pattern.source}`,
				data,
				self.definition.errorMessage,
			);
		},
		templateLiteral.overrideHandler,
	) as never;

	return self as never;
}

templateLiteral.overrideHandler = createOverride<DataParserTemplateLiteral>("@duplojs/utils/data-parser/templateLiteral");
