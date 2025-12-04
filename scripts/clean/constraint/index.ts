import { createErrorKind, kindHeritage, type Unwrap, unwrap, wrapValue, type Kind, type WrappedValue } from "@scripts";
import { createCleanKind } from "../kind";
import { type Primitive, type EligiblePrimitive, type PrimitiveHandler } from "../primitive";
import * as DArray from "../../array";
import * as DEither from "../../either";
import type * as DDataParser from "../../dataParser";

export * from "./defaultConstraint";

export const constrainedTypeKind = createCleanKind<
	"constrained-type",
	Record<string, unknown>
>("constrained-type");

export interface ConstrainedType<
	GenericName extends string,
	GenericValue extends unknown,
> extends Kind<
		typeof constrainedTypeKind.definition,
		Record<GenericName, unknown>
	>,
	WrappedValue<GenericValue> {

}

export const constraintHandlerKind = createCleanKind("constraint-handler");

export interface ConstraintHandler<
	GenericName extends string = string,
	GenericPrimitiveValue extends EligiblePrimitive = EligiblePrimitive,
	GenericCheckers extends readonly DDataParser.DataParserChecker[] = readonly DDataParser.DataParserChecker[],
> extends Kind<typeof constraintHandlerKind.definition> {
	readonly name: GenericName;

	readonly checkers: GenericCheckers;

	readonly primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>;

	create<
		GenericData extends GenericPrimitiveValue,
	>(
		data: GenericData
	): (
		| DEither.EitherRight<
			"createConstrainedType",
			ConstrainedType<GenericName, GenericData>
		>
		| DEither.EitherLeft<
			"createConstrainedTypeError",
			DDataParser.DataParserError
		>
	);

	create<
		GenericPrimitive extends Primitive<GenericPrimitiveValue>,
	>(
		data: GenericPrimitive
	): (
		| DEither.EitherRight<
			"createConstrainedType",
			(
				& GenericPrimitive
				& ConstrainedType<GenericName, Unwrap<GenericPrimitive>>
			)
		>
		| DEither.EitherLeft<
			"createConstrainedTypeError",
			DDataParser.DataParserError
		>
	);

	createOrThrow<
		GenericData extends GenericPrimitiveValue,
	>(
		data: GenericData
	): ConstrainedType<GenericName, GenericData>;

	createOrThrow<
		GenericPrimitive extends Primitive<GenericPrimitiveValue>,
	>(
		data: GenericPrimitive
	): (
		& GenericPrimitive
		& ConstrainedType<GenericName, Unwrap<GenericPrimitive>>
	);

	createWithUnknown<
		GenericData extends unknown,
	>(
		data: GenericData
	): (
		| DEither.EitherRight<
			"createConstrainedType",
			ConstrainedType<GenericName, GenericPrimitiveValue>
		>
		| DEither.EitherLeft<
			"createConstrainedTypeError",
			DDataParser.DataParserError
		>
	);

	createWithUnknownOrThrow<
		GenericData extends unknown,
	>(
		data: GenericData
	): ConstrainedType<GenericName, GenericPrimitiveValue>;

	is<
		GenericInput extends WrappedValue,
	>(input: GenericInput): input is Extract<
		GenericInput,
		ConstrainedType<GenericName, GenericPrimitiveValue>
	>;
}

export class CreateConstrainedTypeError extends kindHeritage(
	"create-constrained-type-error",
	createErrorKind("create-constrained-type-error"),
	Error,
) {
	public constructor(
		public constrainedTypeName: string,
		public data: unknown,
		public dataParserError: DDataParser.DataParserError,
	) {
		super({}, [`Error when create constrained type ${constrainedTypeName}.`]);
	}
}

export function createConstraint<
	GenericName extends string,
	GenericPrimitiveValue extends EligiblePrimitive,
	const GenericChecker extends(
		| DDataParser.DataParserChecker<
			DDataParser.DataParserCheckerDefinition,
			GenericPrimitiveValue
		>
		| readonly [
			DDataParser.DataParserChecker<
				DDataParser.DataParserCheckerDefinition,
				GenericPrimitiveValue
			>,
			...DDataParser.DataParserChecker<
				DDataParser.DataParserCheckerDefinition,
				GenericPrimitiveValue
			>[],
		]
	) = never,
>(
	name: GenericName,
	primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>,
	checker: GenericChecker,
): ConstraintHandler<
		GenericName,
		GenericPrimitiveValue,
		DArray.ArrayCoalescing<GenericChecker>
	> {
	const checkers = DArray.coalescing(checker);
	const dataParserWithCheckers = primitiveHandler
		.dataParser
		.addChecker(...checkers as never);

	function create(data: any) {
		const result = dataParserWithCheckers.parse(unwrap(data));

		if (DEither.isLeft(result)) {
			return DEither.left(
				"createConstrainedTypeError",
				unwrap(result),
			);
		} else if (constrainedTypeKind.has(data)) {
			return DEither.right(
				"createConstrainedType",
				constrainedTypeKind.addTo(
					data,
					{
						...constrainedTypeKind.getValue(data),
						[name]: null,
					},
				),
			);
		} else {
			return DEither.right(
				"createConstrainedType",
				constrainedTypeKind.setTo(
					wrapValue(unwrap(result)),
					{ [name]: null },
				),
			);
		}
	}

	function createOrThrow(data: unknown) {
		const result = create(data);

		if (DEither.isLeft(result)) {
			throw new CreateConstrainedTypeError(name, data, unwrap(result));
		} else {
			return unwrap(result) as never;
		}
	}

	function is(input: WrappedValue<unknown>) {
		if (
			constrainedTypeKind.has(input)
			&& constrainedTypeKind.getValue(input)[name] === null
		) {
			return true;
		}

		return false;
	}

	return constraintHandlerKind.setTo({
		name,
		primitiveHandler,
		checkers,
		create,
		createOrThrow,
		createWithUnknown: create,
		createWithUnknownOrThrow: createOrThrow,
		is,
	}) as never;
}

export type Constraint<
	GenericConstrainHandler extends ConstraintHandler,
	GenericValue extends DDataParser.InputChecker<GenericConstrainHandler["checkers"][number]>
	= DDataParser.InputChecker<GenericConstrainHandler["checkers"][number]>,
> = Extract<
	ConstrainedType<
		GenericConstrainHandler["name"],
		GenericValue
	>,
	any
>;
