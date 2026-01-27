import { type Adaptor, type AnyTuple, type FixDeepFunctionInfer, type Kind, type NeverCoalescing, pipe, createOverride, type SimplifyTopLevel } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import { type DataParserCheckerStringMax, type DataParserCheckerStringMin, type DataParserCheckerStringRegex, type DataParserCheckerEmail, type DataParserDefinitionString, type DataParserString } from "../string";
import { type DataParserCheckerInt, type DataParserDefinitionNumber, type DataParserNumber } from "../number";
import { type DataParserDefinitionBigInt, type DataParserBigInt } from "../bigint";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "../literal";
import { type DataParserDefinitionEmpty, type DataParserEmpty } from "../empty";
import { type DataParserDefinitionNil, type DataParserNil } from "../nil";
import { type DataParserDefinitionBoolean, type DataParserBoolean } from "../boolean";
import { createDataParserKind } from "../../kind";
import { type CheckerRefineImplementation } from "../refine";
import { type DataParserDefinitionUnion, type DataParserUnion } from "../union";
import { createTemplateLiteralPattern } from "./createTemplateLiteralPattern";
import { type GetPropsWithValueExtends } from "@scripts/object";

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
					| DataParserCheckerEmail
					| DataParserCheckerStringMax
					| DataParserCheckerStringMin
					| DataParserCheckerStringRegex
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

export interface DataParserTemplateLiteralCheckerCustom<
	GenericInput extends string = string,
> {}

export type DataParserTemplateLiteralCheckers<
	GenericInput extends string = string,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserTemplateLiteralCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserTemplateLiteralCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionTemplateLiteral extends DataParserDefinition<
	DataParserTemplateLiteralCheckers<string>
> {
	readonly template: TemplateLiteralShape;
	readonly pattern: RegExp;
}

export const templateLiteralKind = createDataParserKind("template-literal");

type _DataParserTemplateLiteral<
	GenericDefinition extends DataParserDefinitionTemplateLiteral,
> = (
	& DataParser<
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
		Omit<DataParserDefinitionTemplateLiteral, "template" | "pattern">
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

	const self = dataParserInit<DataParserTemplateLiteral>(
		templateLiteralKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			template,
			pattern,
		},
		(data, _error, self) => {
			if (typeof data === "string" && self.definition.pattern.test(data)) {
				return data as never;
			}

			return SymbolDataParserErrorIssue;
		},
		templateLiteral.overrideHandler,
	) as never;

	return self as never;
}

templateLiteral.overrideHandler = createOverride<DataParserTemplateLiteral>("@duplojs/utils/data-parser/templateLiteral");
