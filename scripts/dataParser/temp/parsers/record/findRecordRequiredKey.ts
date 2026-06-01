import { innerPipe, isType, justReturn, or, pipe, when } from "@scripts/common";
import * as DArray from "@scripts/array";
import * as DPattern from "@scripts/pattern";
import * as DString from "@scripts/string";
import { bigIntKind } from "@scripts/dataParser/parsers/bigint";
import { booleanKind } from "@scripts/dataParser/parsers/boolean";
import { emptyKind } from "@scripts/dataParser/parsers/empty";
import { literalKind } from "@scripts/dataParser/parsers/literal";
import { nilKind } from "@scripts/dataParser/parsers/nil";
import { numberKind } from "@scripts/dataParser/parsers/number";
import { stringKind } from "@scripts/dataParser/parsers/string";
import { templateLiteralKind, type TemplateLiteralParts } from "@scripts/dataParser/parsers/templateLiteral";
import { unionKind } from "@scripts/dataParser/parsers/union";
import { type DataParserRecordKey } from ".";

export function findRecordRequiredKeyOnTemplateLiteralPart(
	templatePart: readonly TemplateLiteralParts[],
): readonly string[] {
	return pipe(
		templatePart,
		DArray.map(
			innerPipe(
				DPattern.when(
					(value) => stringKind.has(value)
						|| numberKind.has(value)
						|| bigIntKind.has(value),
					justReturn([]),
				),
				DPattern.when(
					or([
						isType("bigint"),
						isType("boolean"),
						isType("null"),
						isType("number"),
						isType("string"),
						isType("undefined"),
					]),
					innerPipe(
						when(
							isType("bigint"),
							(value) => `${value}n`,
						),
						DString.to,
					),
				),
				DPattern.when(
					literalKind.has,
					(value) => pipe(
						value.definition.value,
						DArray.map(
							(element) => findRecordRequiredKeyOnTemplateLiteralPart(
								[element],
							),
						),
						DArray.flat,
					),
				),
				DPattern.when(
					templateLiteralKind.has,
					(value) => findRecordRequiredKeyOnTemplateLiteralPart(value.definition.template),
				),
				DPattern.when(
					booleanKind.has,
					justReturn(["true", "false"]),
				),
				DPattern.when(
					emptyKind.has,
					justReturn("undefined"),
				),
				DPattern.when(
					nilKind.has,
					justReturn("null"),
				),
				DPattern.when(
					unionKind.has,
					(dataParser) => pipe(
						dataParser.definition.options,
						DArray.map(
							(element) => findRecordRequiredKeyOnTemplateLiteralPart(
								[element],
							),
						),
						DArray.flat,
					),
				),
				DPattern.exhaustive,
			),
		),
		DArray.reduce(
			DArray.reduceFrom<string[]>([""]),
			({ lastValue, element, next }) => pipe(
				element,
				DPattern.when(
					isType("string"),
					(element) => next(
						DArray.map(
							lastValue,
							DString.concat(element),
						),
					),
				),
				DPattern.when(
					isType("array"),
					(elements) => next(
						DArray.flatMap(
							lastValue,
							(value) => DArray.map(
								elements,
								DString.prepend(value),
							),
						),
					),
				),
				DPattern.exhaustive,
			),
		),
	);
}

export function findRecordRequiredKey(keyParser: DataParserRecordKey): readonly string[] {
	return pipe(
		keyParser,
		DPattern.when(
			(value) => stringKind.has(value) || numberKind.has(value),
			justReturn([]),
		),
		DPattern.when(
			literalKind.has,
			(dataParser) => dataParser.definition.value,
		),
		DPattern.when(
			unionKind.has,
			(dataParser) => pipe(
				dataParser.definition.options,
				DArray.map(findRecordRequiredKey),
				DArray.flat,
			),
		),
		DPattern.when(
			templateLiteralKind.has,
			(dataParser) => findRecordRequiredKeyOnTemplateLiteralPart(
				dataParser.definition.template,
			),
		),
		DPattern.exhaustive,
	);
}
