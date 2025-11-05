import { type Adaptor, escapeRegExp, type FixDeepFunctionInfer, innerPipe, isType, type Kind, type NeverCoalescing, pipe, when, whenElse } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import * as DArray from "@scripts/array";
import * as DPattern from "@scripts/pattern";
import * as DString from "@scripts/string";
import { stringKind, type DataParserCheckerEmail, type DataParserDefinitionString, type DataParserString } from "./string";
import { type DataParserDefinitionNumber, numberKind, type DataParserNumber } from "./number";
import { bigIntKind, type DataParserDefinitionBigInt, type DataParserBigInt } from "./bigint";
import { type DataParserDefinitionLiteral, literalKind, type DataParserLiteral } from "./literal";
import { type DataParserDefinitionEmpty, emptyKind, type DataParserEmpty } from "./empty";
import { type DataParserDefinitionNil, nilKind, type DataParserNil } from "./nil";
import { booleanKind, type DataParserDefinitionBoolean, type DataParserBoolean } from "./boolean";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";

export type DataParsersTemplateLiteral = (
	| string
	| DataParserString<
		& DataParserDefinitionString
		& {
			readonly checkers: readonly (
				| DataParserCheckerEmail
			)[];
		}
	>
	| DataParserNumber<
		& DataParserDefinitionNumber
		& { readonly checkers: readonly [] }
	>
	| DataParserBigInt<
		& DataParserDefinitionBigInt
		& { readonly checkers: readonly [] }
	>
	| DataParserBoolean<
		& DataParserDefinitionBoolean
		& { readonly checkers: readonly [] }
	>
	| DataParserLiteral<
		& DataParserDefinitionLiteral
		& { readonly checkers: readonly [] }
	>
	| DataParserEmpty<
		& DataParserDefinitionEmpty
		& { readonly checkers: readonly [] }
	>
	| DataParserNil<
		& DataParserDefinitionNil
		& { readonly checkers: readonly [] }
	>
	| DataParserTemplateLiteral<
		& DataParserDefinitionTemplateLiteral
		& { readonly checkers: readonly [] }
	>
);

export type TemplateLiteralShape = readonly [DataParsersTemplateLiteral, ...DataParsersTemplateLiteral[]];

type EligibleTemplateLiteral = string | number | bigint | boolean | null | undefined;

export type TemplateLiteralShapeOutput<
	GenericTemplate extends TemplateLiteralShape,
	GenericLastResult extends string = "",
> = GenericTemplate extends readonly [
	infer InferredFirst extends DataParsersTemplateLiteral,
	...infer InferredRest extends DataParsersTemplateLiteral[],
]
	? (
		`${GenericLastResult}${
			InferredFirst extends string
				? InferredFirst
				: Adaptor<
					Output<
						Exclude<InferredFirst, string>
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
	infer InferredFirst extends DataParsersTemplateLiteral,
	...infer InferredRest extends DataParsersTemplateLiteral[],
]
	? (
		`${GenericLastResult}${
			InferredFirst extends string
				? InferredFirst
				: Adaptor<
					Input<
						Exclude<InferredFirst, string>
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
> = (
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionTemplateLiteral extends DataParserDefinition<DataParserTemplateLiteralCheckers> {
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
		template as TemplateLiteralShape,
		DArray.map(
			innerPipe(
				DPattern.when(
					isType("string"),
					(value) => `(?:${escapeRegExp(value)})`,
				),
				DPattern.when(
					numberKind.has,
					() => "(:?[0-9]+)",
				),
				DPattern.when(
					bigIntKind.has,
					() => "(?:[0-9]+n)",
				),
				DPattern.when(
					booleanKind.has,
					() => "(?:true|false)",
				),
				DPattern.when(
					nilKind.has,
					() => "(?:null)",
				),
				DPattern.when(
					emptyKind.has,
					() => "(?:undefined)",
				),
				DPattern.when(
					literalKind.has,
					(dataParser) => pipe(
						dataParser.definition.value,
						DArray.map(
							innerPipe(
								when(
									isType("bigint"),
									(value) => `${value}n`,
								),
								String,
								escapeRegExp,
							),
						),
						DArray.join("|"),
						(pattern) => `(?:${pattern})`,
					),
				),
				DPattern.when(
					stringKind.has,
					innerPipe(
						whenElse(
							(dataParser) => !!dataParser.definition.checkers.length,
							(dataParser) => pipe(
								dataParser.definition.checkers,
								DArray.map(
									(element) => pipe(
										element.definition.pattern.source,
										DString.replace(/^\^/, ""),
										DString.replace(/\$$/, ""),
									),
								),
								DArray.join(""),
							),
							() => "(?:[^]*)",
						),
					),
				),
				DPattern.when(
					templateLiteralKind.has,
					(dataParser) => pipe(
						dataParser.definition.pattern.source,
						DString.replace(/^\^/, ""),
						DString.replace(/\$$/, ""),
						(pattern) => `(?:${pattern})`,
					),
				),
				DPattern.exhaustive,
			),
		),
		DArray.join(""),
		(pattern) => new RegExp(`^${pattern}$`),
	);

	return dataParserInit<DataParserTemplateLiteral>(
		templateLiteralKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				template,
				pattern,
			},
		},
		(data, _error, self) => {
			if (typeof data === "string" && self.definition.pattern.test(data)) {
				return data as never;
			}

			return SymbolDataParserErrorIssue;
		},
	) as never;
}
