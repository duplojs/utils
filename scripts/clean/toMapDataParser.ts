import * as DDataParser from "../dataParser";
import * as DPattern from "../pattern";
import { constrainedTypeKind, constraintHandlerKind, constraintsSetHandlerKind, type ConstraintHandler, type ConstraintsSetHandler, type GetConstraint, type GetConstraints } from "./constraint";
import { newTypeHandlerKind, newTypeKind } from "./newType";
import { primitiveHandlerKind, type PrimitiveHandler } from "./primitive";
import { type EntityPropertyDefinition, entityPropertyUnionKind, entityPropertyIdentifierKind, entityPropertyStructureKind, entityPropertyArrayKind, entityPropertyNullableKind, entityPropertyDefinitionToDataParser, type EntityInputRawProperty, type EntityProperty } from "./entity";
import { hasSomeKinds, type IsNever, keyWrappedValue } from "@scripts/common";

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

type InputDataParser<
	GenericInput extends ToMapDataParserInput,
> = GenericInput extends ConstraintHandler<any, infer InferredValue, readonly any[], infer InferredInput>
	? IsNever<InferredInput> extends true
		? InferredValue
		: InferredInput
	: GenericInput extends ConstraintsSetHandler<infer InferredValue, readonly any[], infer InferredInput>
		? IsNever<InferredInput> extends true
			? InferredValue
			: InferredInput
		: GenericInput extends PrimitiveHandler<any, infer InferredValue, infer InferredInput>
			? IsNever<InferredInput> extends true
				? InferredValue
				: InferredInput
			: GenericInput extends EntityPropertyDefinition
				? EntityInputRawProperty<GenericInput>
				: never;

interface ToMapDataParserParams {
	coerce?: boolean;
}

/**
 * {@include clean/toMapDataParser/index.md}
 */
export function toMapDataParser<
	GenericInput extends ToMapDataParserInput,
	GenericOutputDataParser extends OutputDataParser<GenericInput> = OutputDataParser<GenericInput>,
	GenericInputDataParser extends InputDataParser<GenericInput> = InputDataParser<GenericInput>,
>(
	input: GenericInput,
	params?: ToMapDataParserParams,
): DDataParser.DataParser<
	NoInfer<GenericOutputDataParser>,
	NoInfer<GenericInputDataParser>
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

	const dataParser = input.internal.dataParser.clone() as DDataParser.DataParsers;

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
		params?.coerce
			? DDataParser.coercer(dataParser)
			: dataParser,
		(value) => ({
			...valueContainer,
			[keyWrappedValue]: value,
		}),
	) as never;
}
