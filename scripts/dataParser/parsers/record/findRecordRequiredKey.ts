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
): string[] | null {
	return pipe(
		templatePart,
		DArray.map(
			innerPipe(
				DPattern.when(
					(value) => stringKind.has(value)
						|| numberKind.has(value)
						|| bigIntKind.has(value),
					justReturn(null),
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
						String,
					),
				),
				DPattern.when(
					literalKind.has,
					(value) => findRecordRequiredKey(value),
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
						DPattern.when(
							DArray.notIncludes(null),
							DArray.flat,
						),
						DPattern.otherwise(justReturn(null)),
					),
				),
				DPattern.exhaustive,
			),
		),
		DArray.reduce(
			DArray.reduceFrom<string[]>([""]),
			({ lastValue, element, exit, next }) => pipe(
				element,
				DPattern.when(
					isType("null"),
					justReturn(exit(null)),
				),
				DPattern.when(
					isType("string"),
					(element) => next(
						DArray.map(
							lastValue,
							(value) => DString.concat(value, element),
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
								(subValue) => DString.concat(value, subValue),
							),
						),
					),
				),
				DPattern.exhaustive,
			),
		),
	);
}

export function findRecordRequiredKey(keyParser: DataParserRecordKey): string[] | null {
	return pipe(
		keyParser,
		DPattern.when(
			(value) => stringKind.has(value) || numberKind.has(value),
			justReturn(null),
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
					),
				),
			),
		),
		DPattern.when(
			unionKind.has,
			(dataParser) => pipe(
				dataParser.definition.options,
				DArray.map(findRecordRequiredKey),
				DPattern.when(
					DArray.includes(null),
					justReturn(null),
				),
				DPattern.otherwise(
					innerPipe(
						DArray.filter(isType("array")),
						DArray.flat,
					),
				),
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
