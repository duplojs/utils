import * as DDataParser from "../dataParser";
import * as DPattern from "../pattern";
import { constrainedTypeKind, constraintHandlerKind, constraintsSetHandlerKind, type ConstraintHandler, type ConstraintsSetHandler, type GetConstraint, type GetConstraints } from "./constraint";
import { newTypeHandlerKind, newTypeKind } from "./newType";
import { primitiveHandlerKind, type PrimitiveHandler } from "./primitive";
import { type EntityPropertyDefinition, entityPropertyUnionKind, entityPropertyIdentifierKind, entityPropertyStructureKind, entityPropertyArrayKind, entityPropertyNullableKind, entityPropertyDefinitionToDataParser, type EntityProperty } from "./entity";
import { hasSomeKinds, keyWrappedValue } from "@scripts/common";

type ToMapDataParserInput = (
	| ConstraintHandler<any, any, readonly any[], any>
	| ConstraintsSetHandler<any, readonly any[], any>
	| PrimitiveHandler
	| EntityPropertyDefinition
);

type OutputDataParser<
	GenericInput extends ToMapDataParserInput,
> = GenericInput extends ConstraintHandler<any, any, readonly any[], any>
	? GetConstraint<GenericInput>
	: GenericInput extends ConstraintsSetHandler<any, readonly any[], any>
		? GetConstraints<GenericInput>
		: GenericInput extends PrimitiveHandler
			? ReturnType<GenericInput["createWithUnknownOrThrow"]>
			: GenericInput extends EntityPropertyDefinition
				? EntityProperty<GenericInput>
				: never;

interface ToMapDataParserParams {
	coerce?: boolean;
}

/**
 * {@include clean/toMapDataParser/index.md}
 */
export function toMapDataParser<
	GenericInput extends ToMapDataParserInput,
	GenericOutput extends OutputDataParser<GenericInput>,
>(
	input: GenericInput,
	params?: ToMapDataParserParams,
): DDataParser.DataParser<
	NoInfer<GenericOutput>,
	unknown
>;

export function toMapDataParser(
	input: ToMapDataParserInput,
	params?: ToMapDataParserParams,
) {
	if (
		hasSomeKinds(
			input,
			[
				entityPropertyNullableKind,
				entityPropertyArrayKind,
				entityPropertyStructureKind,
				entityPropertyIdentifierKind,
				entityPropertyUnionKind,
			],
		)
	) {
		return entityPropertyDefinitionToDataParser(
			input,
			(newTypeHandler) => toMapDataParser(
				newTypeHandler,
				params,
			),
		);
	}

	const dataParser = (primitiveHandlerKind.has(input)
		? input.dataParser.clone()
		: input.internal.dataParser.clone()) as DDataParser.DataParsers;

	if (
		params?.coerce
		&& hasSomeKinds(
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
			hasSomeKinds([constraintHandlerKind, constraintsSetHandlerKind]),
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
			[keyWrappedValue]: value,
		}),
	) as never;
}
