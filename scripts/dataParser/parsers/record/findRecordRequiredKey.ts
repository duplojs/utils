import { innerPipe, isType, justReturn, or, pipe, when } from "@scripts/common";
import { type DataParserRecordKey } from ".";
import * as DPattern from "@scripts/pattern";
import * as DArray from "@scripts/array";
import * as DString from "@scripts/string";
import { stringKind } from "../string";
import { numberKind } from "../number";
import { literalKind } from "../literal";
import { unionKind } from "../union";
import { templateLiteralKind, type TemplateLiteralParts } from "../templateLiteral";
import { bigIntKind } from "../bigint";
import { booleanKind } from "../boolean";
import { emptyKind } from "../empty";
import { nilKind } from "../nil";

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
