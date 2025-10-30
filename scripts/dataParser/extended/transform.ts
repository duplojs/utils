import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser, type Output } from "../base";
import { type DataParserError } from "../error";

type _DataParserTransformExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTransform,
> = (
	& dataParsers.DataParserTransform<GenericDefinition>
	& DataParserExtended
);

export interface DataParserTransformExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTransform = dataParsers.DataParserDefinitionTransform,
> extends _DataParserTransformExtended<GenericDefinition> {

}

export function transform<
	GenericDataParser extends DataParser,
	GenericOutput extends unknown,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction">
	> = never,
>(
	inner: GenericDataParser,
	theFunction: (
		input: Output<GenericDataParser>,
		error: DataParserError
	) => GenericOutput,
	definition?: GenericDefinition,
): DataParserTransformExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionTransform,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				theFunction(input: Output<GenericDataParser>): GenericOutput;
			}
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserTransform,
		DataParserTransformExtended
	>(
		dataParsers.transform(inner, theFunction, definition),
		{},
	) as never;
}
