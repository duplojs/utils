import { escapeRegExp, innerPipe, isType, or, pipe, when } from "@scripts/common";
import { templateLiteralKind, type TemplateLiteralParts } from ".";
import * as DArray from "@scripts/array";
import * as DPattern from "@scripts/pattern";
import * as DString from "@scripts/string";
import { numberKind } from "../number";
import { bigIntKind } from "../bigint";
import { booleanKind } from "../boolean";
import { nilKind } from "../nil";
import { emptyKind } from "../empty";
import { literalKind } from "../literal";
import { stringKind } from "../string";
import { unionKind } from "../union";

const decimalNumberPattern = "[+-]?(?:(?:[0-9]+(?:\\.[0-9]*)?)|(?:\\.[0-9]+))(?:[eE][+-]?[0-9]+)?";
const numericBasePattern = "0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+)";
const numberPattern = `(?:${decimalNumberPattern})|(?:${numericBasePattern})`;
const bigintPattern = `(?:-?${numericBasePattern})|(?:-?(?:0|[1-9][0-9]*))`;

export function createTemplateLiteralPattern(templatePart: readonly TemplateLiteralParts[]): string {
	return pipe(
		templatePart,
		DArray.map(
			innerPipe(
				DPattern.when(
					or([
						isType("bigint"),
						isType("boolean"),
						isType("null"),
						isType("number"),
						isType("string"),
						isType("undefined"),
					]),
					(value) => {
						if (typeof value === "number" && !Number.isFinite(value)) {
							return `(?:${numberPattern})`;
						}

						return pipe(
							value,
							when(
								isType("bigint"),
								(value) => `${value}n`,
							),
							String,
							escapeRegExp,
							(value) => `(?:${value})`,
						);
					},
				),
				DPattern.when(
					numberKind.has,
					() => `(?:${numberPattern})`,
				),
				DPattern.when(
					bigIntKind.has,
					() => `(?:(?:${bigintPattern})n)`,
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
							(element) => createTemplateLiteralPattern([element]),
						),
						DArray.join("|"),
						(pattern) => `(?:${pattern})`,
					),
				),
				DPattern.when(
					stringKind.has,
					() => "(?:[^]*)",
				),
				innerPipe(
					DPattern.when(
						templateLiteralKind.has,
						(dataParser) => pipe(
							dataParser.definition.pattern.source,
							DString.replace(/^\^/, ""),
							DString.replace(/\$$/, ""),
							(pattern) => `(?:${pattern})`,
						),
					),
					DPattern.when(
						unionKind.has,
						(dataParser) => pipe(
							dataParser.definition.options,
							DArray.map(
								(option) => createTemplateLiteralPattern(
									[option],
								),
							),
							DArray.join("|"),
							(pattern) => `(?:${pattern})`,
						),
					),
					DPattern.exhaustive,
				),
			),
		),
		DArray.join(""),
	);
}
