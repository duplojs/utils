import * as DDataParser from "../dataParser";
import * as DCommon from "../common";
import * as DPattern from "../pattern";
import { constrainedTypeKind, constraintHandlerKind, constraintsSetHandlerKind, type ConstraintHandler, type ConstraintsSetHandler, type GetConstraint, type GetConstraints } from "./constraint";
import { newTypeHandlerKind, newTypeKind, type GetNewType, type NewTypeHandler } from "./newType";
import { primitiveHandlerKind, type PrimitiveHandler } from "./primitive";

type ToMapDataParserInput =
	| NewTypeHandler<any, any, readonly any[], any>
	| ConstraintHandler<any, any, readonly any[], any>
	| ConstraintsSetHandler<any, readonly any[], any>
	| PrimitiveHandler;

type OutputDataParser<
	GenericInput extends ToMapDataParserInput,
> = GenericInput extends NewTypeHandler<any, any, readonly any[], any>
	? GetNewType<GenericInput>
	: GenericInput extends ConstraintHandler<any, any, readonly any[], any>
		? GetConstraint<GenericInput>
		: GenericInput extends ConstraintsSetHandler<any, readonly any[], any>
			? GetConstraints<GenericInput>
			: GenericInput extends PrimitiveHandler
				? ReturnType<GenericInput["createWithUnknownOrThrow"]>
				: never;

interface ToMapDataParserParams {
	coerce?: boolean;
}

/**
 * {@include clean/toMapDataParser/index.md}
 */
export function toMapDataParser<
	GenericInput extends ToMapDataParserInput,
	GenericInputDataParser extends unknown = unknown,
>(
	input: GenericInput,
	params?: ToMapDataParserParams,
): DDataParser.Contract<
	OutputDataParser<GenericInput>,
	GenericInputDataParser
>;

export function toMapDataParser(
	input: ToMapDataParserInput,
	params?: ToMapDataParserParams,
) {
	const dataParser = (primitiveHandlerKind.has(input)
		? input.dataParser.clone()
		: input.internal.dataParser.clone()) as DDataParser.DataParsers;

	if (
		params?.coerce
		&& DCommon.hasSomeKinds(
			dataParser,
			[
				DDataParser.stringKind,
				DDataParser.numberKind,
				DDataParser.bigIntKind,
				DDataParser.bigIntKind,
				DDataParser.booleanKind,
				DDataParser.dateKind,
				DDataParser.timeKind,
				DDataParser.emptyKind,
				DDataParser.nilKind,
			],
		)
	) {
		(dataParser.definition.coerce as any) = true;
	}

	const valueContainer = DPattern.match(input)
		.when(
			newTypeHandlerKind.has,
			(newType) => ({
				...newTypeKind.setTo({}, newType.name),
				...constrainedTypeKind.setTo({}, newType.internal.constraintKindValue),
			}),
		)
		.when(
			DCommon.hasSomeKinds([constraintHandlerKind, constraintsSetHandlerKind]),
			(constraintOrSet) => constrainedTypeKind.setTo(
				{},
				constraintOrSet.internal.constraintKindValue,
			),
		)
		.when(
			primitiveHandlerKind.has,
			() => ({}),
		)
		.exhaustive();

	return DDataParser.transform(
		dataParser,
		(value) => ({
			...valueContainer,
			[DCommon.keyWrappedValue]: value,
		}),
	) as never;
}
