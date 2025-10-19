import { type Adaptor, createKind, escapeRegExp, innerPipe, isType, type Kind, pipe, whenElse } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input } from "../base";
import { type MergeDefinition } from "@scripts/dataParser/types";
import { SymbolDataParserErrorIssue } from "@scripts/dataParser/error";
import * as DArray from "@scripts/array";
import * as DPattern from "@scripts/pattern";
import * as DString from "@scripts/string";
import { dataParserStringKind, string, type DataParserCheckerEmail, type DataParserDefinitionString, type DataParserString } from "./string";
import { dataParserNumberKind, type DataParserNumber } from "./number";
import { dataParserBigIntKind, type DataParserBigInt } from "./bigint";
import { dataParserLiteralKind, type DataParserLiteral } from "./literal";
import { dataParserEmptyKind, type DataParserEmpty } from "./empty";
import { dataParserNilKind, type DataParserNil } from "./nil";
import { dataParserBooleanKind, type DataParserBoolean } from "./boolean";

export type DataParsersTemplateLiteral = (
	| string
	| DataParserString<
		& DataParserDefinitionString
		& {
			checkers: (
				| DataParserCheckerEmail
			)[];
		}
	>
	| DataParserNumber
	| DataParserBigInt
	| DataParserBoolean
	| DataParserLiteral
	| DataParserEmpty
	| DataParserNil
	| DataParserTemplateLiteral
);

export type TemplateLiteralShape = readonly [DataParsersTemplateLiteral, ...DataParsersTemplateLiteral[]];

type EligibleTemplateLiteral = string | number | bigint | boolean | null | undefined;

export type TemplateLiteralShapeOutput<
	GenericTemplate extends TemplateLiteralShape,
	GenericLastResult extends string = "",
> = GenericTemplate extends [
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
> = GenericTemplate extends [
	infer InferredFirst extends DataParsersTemplateLiteral,
	...infer InferredRest extends TemplateLiteralShape,
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
			: TemplateLiteralShapeInput<InferredRest, InferredResult>
		: never
	: never;

export interface DataParserDefinitionTemplateLiteral extends DataParserDefinition<never> {
	template: TemplateLiteralShape;
	pattern: RegExp;
}

export const dataParserTemplateLiteralKind = createKind("data-parser-template-literal");

type _DataParserTemplateLiteral<
	GenericDefinition extends DataParserDefinitionTemplateLiteral,
> = (
	& DataParser<
		GenericDefinition,
		TemplateLiteralShapeOutput<GenericDefinition["template"]>,
		TemplateLiteralShapeInput<GenericDefinition["template"]>
	>
	& Kind<typeof dataParserTemplateLiteralKind.definition>
);

export interface DataParserTemplateLiteral<
	GenericDefinition extends DataParserDefinitionTemplateLiteral = DataParserDefinitionTemplateLiteral,
> extends _DataParserTemplateLiteral<GenericDefinition> {

}

export function templateLiteral<
	const GenericTemplate extends TemplateLiteralShape,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionTemplateLiteral, "template">
	> = Omit<DataParserDefinitionTemplateLiteral, "template">,
>(
	template: GenericTemplate,
	definition?: GenericDefinition,
): DataParserTemplateLiteral<
		MergeDefinition<
			DataParserDefinitionTemplateLiteral,
			GenericDefinition & { template: GenericTemplate }
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
					dataParserNumberKind.has,
					() => "(:?[0-9]+)",
				),
				DPattern.when(
					dataParserBigIntKind.has,
					() => "(?:[0-9]+n)",
				),
				DPattern.when(
					dataParserBooleanKind.has,
					() => "(?:true|false)",
				),
				DPattern.when(
					dataParserNilKind.has,
					() => "(?:null)",
				),
				DPattern.when(
					dataParserEmptyKind.has,
					() => "(?:undefined)",
				),
				DPattern.when(
					dataParserLiteralKind.has,
					(dataParser) => pipe(
						dataParser.definition.value,
						DArray.map(
							innerPipe(
								String,
								escapeRegExp,
							),
						),
						DArray.join("|"),
						(pattern) => `(?:${pattern})`,
					),
				),
				DPattern.when(
					dataParserTemplateLiteralKind.has,
					(dataParser) => pipe(
						dataParser.definition.pattern.source,
						DString.replace(/^\^/, ""),
						DString.replace(/\$$/, ""),
					),
				),
				DPattern.when(
					dataParserStringKind.has,
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
				DPattern.exhaustive,
			),
		),
		DArray.join(""),
		(pattern) => new RegExp(`^${pattern}$`),
	);

	return dataParserInit<DataParserTemplateLiteral>(
		dataParserTemplateLiteralKind,
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
