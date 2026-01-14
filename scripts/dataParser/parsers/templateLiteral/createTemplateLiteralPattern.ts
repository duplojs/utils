import { escapeRegExp, innerPipe, isType, justReturn, or, pipe, when } from "@scripts/common";
import { templateLiteralKind, type TemplateLiteralParts } from ".";
import * as DArray from "@scripts/array";
import * as DPattern from "@scripts/pattern";
import * as DString from "@scripts/string";
import * as DObject from "@scripts/object";
import { checkerIntKind, numberKind } from "../number";
import { bigIntKind } from "../bigint";
import { booleanKind } from "../boolean";
import { nilKind } from "../nil";
import { emptyKind } from "../empty";
import { literalKind } from "../literal";
import { checkerEmailKind, checkerStringMaxKind, checkerStringMinKind, checkerStringRegexKind, stringKind } from "../string";
import { unionKind } from "../union";

export function createTemplateLiteralPattern(templatePart: readonly TemplateLiteralParts[]): string {
	return pipe(
		templatePart,
		DArray.map(
			innerPipe(
				DPattern.when(
					or([
						isType("string"),
						isType("boolean"),
						isType("bigint"),
						isType("null"),
						isType("undefined"),
						isType("number"),
					]),
					innerPipe(
						when(
							isType("bigint"),
							(value) => `${value}n`,
						),
						String,
						escapeRegExp,
						(value) => `(?:${value})`,
					),
				),
				DPattern.when(
					numberKind.has,
					(dataParser) => pipe(
						dataParser.definition.checkers,
						DObject.to({
							int: innerPipe(
								DArray.find(checkerIntKind.has),
								when(
									checkerIntKind.has,
									justReturn(true),
								),
							),
						}),
						({ int }) => {
							if (int) {
								return "(?:-?[0-9]+)";
							}

							return "(?:-?[0-9]+(?:\\.[0-9]+)?)";
						},
					),
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
							(element) => createTemplateLiteralPattern([element]),
						),
						DArray.join("|"),
						(pattern) => `(?:${pattern})`,
					),
				),
				DPattern.when(
					stringKind.has,
					(dataParser) => pipe(
						dataParser.definition.checkers,
						DObject.to({
							email: innerPipe(
								DArray.find(checkerEmailKind.has),
								when(
									checkerEmailKind.has,
									(checker) => pipe(
										checker.definition.pattern.source,
										DString.replace(/^\^/, ""),
										DString.replace(/\$$/, ""),
									),
								),
							),
							min: innerPipe(
								DArray.find(checkerStringMinKind.has),
								when(
									checkerStringMinKind.has,
									(checker) => checker.definition.min,
								),
							),
							max: innerPipe(
								DArray.find(checkerStringMaxKind.has),
								when(
									checkerStringMaxKind.has,
									(checker) => checker.definition.max,
								),
							),
							regex: innerPipe(
								DArray.find(checkerStringRegexKind.has),
								when(
									checkerStringRegexKind.has,
									(checker) => pipe(
										checker.definition.regex.source,
										DString.replace(/^\^/, ""),
										DString.replace(/\$$/, ""),
									),
								),
							),
						}),
						({ email, regex, max, min }) => {
							if (email) {
								return email;
							} else if (regex) {
								return regex;
							} else if (max !== undefined && min !== undefined) {
								return `(?:[^]{${min},${max}})`;
							} else if (max !== undefined) {
								return `(?:[^]{0,${max}})`;
							} else if (min !== undefined) {
								return `(?:[^]{${min},})`;
							}
							return "(?:[^]*)";
						},
					),
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
