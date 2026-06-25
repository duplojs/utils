import { createErrorKind, kindHeritage, type Unwrap, unwrap, wrapValue, type Kind, type WrappedValue, type RemoveKind, createOverride, pipe, type AnyFunction, type FixDeepFunctionInfer, type IsEqual, type IsNever, type NeverCoalescing } from "@scripts";
import { createCleanKind } from "../kind";
import { type Primitive, type EligiblePrimitive, type PrimitiveHandler, type PrimitiveHandlers } from "../primitive";
import * as DArray from "@scripts/array";
import * as DEither from "@scripts/either";
import type * as DDataParser from "@scripts/dataParser";

export const constrainedTypeKind = createCleanKind<
	"constrained-type",
	Record<string, unknown>
>("constrained-type");

export interface ConstrainedType<
	GenericName extends string = string,
	GenericValue extends unknown = unknown,
> extends Kind<
		typeof constrainedTypeKind.definition,
		Record<GenericName, unknown>
	>,
	WrappedValue<GenericValue> {

}

export interface ConstraintError<GenericName extends string = string> {
	constraintName: GenericName;
	dataParserError: DDataParser.DataParserError;
}

export const constraintHandlerKind = createCleanKind("constraint-handler");

export interface ConstraintHandler<
	GenericName extends string = string,
	GenericPrimitiveValue extends EligiblePrimitive = EligiblePrimitive,
	GenericCheckers extends readonly DDataParser.DataParserChecker[] = readonly DDataParser.DataParserChecker[],
	GenericPrimitiveInput extends unknown = unknown,
> extends Kind<typeof constraintHandlerKind.definition> {

	/**
	 * {@include clean/createConstraint/name.md}
	 */
	readonly name: GenericName;

	/**
	 * @deprecated
	 */
	readonly checkers: GenericCheckers;

	/**
	 * @deprecated
	 */
	readonly primitiveHandler: PrimitiveHandler<string, GenericPrimitiveValue>;

	readonly internal: {

		/**
		 * {@include clean/createConstraint/dataParser.md}
		 */
		readonly dataParser: DDataParser.DataParser<GenericPrimitiveValue, unknown>;

		/**
		 * {@include clean/createConstraint/primitiveHandler.md}
		 */
		readonly primitiveHandler: PrimitiveHandler<string, GenericPrimitiveValue> & PrimitiveHandlers;

		/**
		 * {@include clean/createConstraint/checkers.md}
		 */
		readonly checkers: GenericCheckers;

		/**
		 * {@include clean/createConstraint/constraintKindValue.md}
		 */
		readonly constraintKindValue: Record<string, null>;
	};

	/**
	 * {@include clean/createConstraint/create.md}
	 */
	create<
		GenericData extends GenericPrimitiveValue,
	>(
		data: GenericData
	): (
		| DEither.Right<
			"createConstrainedType",
			ConstrainedType<GenericName, GenericData>
		>
		| DEither.Left<
			"createConstrainedTypeError",
			ConstraintError<GenericName>
		>
	);

	create<
		GenericPrimitive extends Primitive<GenericPrimitiveValue>,
	>(
		data: GenericPrimitive
	): (
		| DEither.Right<
			"createConstrainedType",
			(
				& GenericPrimitive
				& ConstrainedType<GenericName, Unwrap<GenericPrimitive>>
			)
		>
		| DEither.Left<
			"createConstrainedTypeError",
			ConstraintError<GenericName>
		>
	);

	/**
	 * {@include clean/createConstraint/createOrThrow.md}
	 */
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

	/**
	 * {@include clean/createConstraint/createWithLarge.md}
	 */
	createWithLarge(
		data: NeverCoalescing<GenericPrimitiveInput, GenericPrimitiveValue>
	): (
		| DEither.Right<
			"createConstrainedType",
			ConstrainedType<GenericName, GenericPrimitiveValue>
		>
		| DEither.Left<
			"createConstrainedTypeError",
			ConstraintError<GenericName>
		>
	);

	/**
	 * {@include clean/createConstraint/createWithLargeOrThrow.md}
	 */
	createWithLargeOrThrow(
		data: NeverCoalescing<GenericPrimitiveInput, GenericPrimitiveValue>
	): ConstrainedType<GenericName, GenericPrimitiveValue>;

	/**
	 * {@include clean/createConstraint/createWithUnknown.md}
	 */
	createWithUnknown<
		GenericData extends unknown,
	>(
		data: GenericData
	): (
		| DEither.Right<
			"createConstrainedType",
			ConstrainedType<GenericName, GenericPrimitiveValue>
		>
		| DEither.Left<
			"createConstrainedTypeError",
			ConstraintError<GenericName>
		>
	);

	/**
	 * {@include clean/createConstraint/createWithUnknownOrThrow.md}
	 */
	createWithUnknownOrThrow<
		GenericData extends unknown,
	>(
		data: GenericData
	): ConstrainedType<GenericName, GenericPrimitiveValue>;

	/**
	 * {@include clean/createConstraint/is.md}
	 */
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
		public constraintName: string,
		public data: unknown,
		public dataParserError: DDataParser.DataParserError,
	) {
		super({}, [`Error when create constrained type ${constraintName}.`]);
	}
}

/**
 * {@include clean/createConstraint/index.md}
 */
export function createConstraint<
	GenericName extends string,
	GenericPrimitiveValue extends EligiblePrimitive,
	GenericPrimitiveInput extends unknown,
	const GenericChecker extends(
		| DDataParser.DataParserChecker<
			GenericPrimitiveValue
		>
		| readonly [
			DDataParser.DataParserChecker<
				GenericPrimitiveValue
			>,
			...DDataParser.DataParserChecker<
				GenericPrimitiveValue
			>[],
		]
	) = never,
	GenericPrimitiveRefinedValue extends EligiblePrimitive = DDataParser.ApplyRefinementOfChecker<
		GenericPrimitiveValue,
		DArray.ArrayCoalescing<GenericChecker>[number]
	>,
>(
	name: GenericName,
	primitiveHandler: PrimitiveHandler<string, GenericPrimitiveValue, GenericPrimitiveInput>,
	checker: FixDeepFunctionInfer<
		(
			| DDataParser.DataParserChecker<
				GenericPrimitiveValue
			>
			| readonly [
				DDataParser.DataParserChecker<
					GenericPrimitiveValue
				>,
				...DDataParser.DataParserChecker<
					GenericPrimitiveValue
				>[],
			]
		),
		GenericChecker
	>,
): ConstraintHandler<
		GenericName,
		GenericPrimitiveRefinedValue,
		DArray.ArrayCoalescing<GenericChecker>,
		IsNever<GenericPrimitiveInput> extends true
			? IsEqual<
				GenericPrimitiveValue,
				GenericPrimitiveRefinedValue
			> extends true
				? never
				: GenericPrimitiveValue
			: GenericPrimitiveInput
	> {
	const checkers = DArray.coalescing(checker);
	const dataParserWithCheckers = primitiveHandler
		.internal
		.dataParser
		.addChecker(...checkers as [never]);

	const constraintKindValue = { [name]: null };

	function create(data: any) {
		const result = dataParserWithCheckers.parse(unwrap(data));

		if (DEither.isLeft(result)) {
			return DEither.left(
				"createConstrainedTypeError",
				{
					constraintName: name,
					dataParserError: unwrap(result),
				} satisfies ConstraintError,
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
			const { constraintName, dataParserError } = unwrap(result);
			throw new CreateConstrainedTypeError(constraintName, data, dataParserError);
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

	return pipe(
		{
			name,
			primitiveHandler,
			checkers,
			internal: {
				primitiveHandler,
				dataParser: dataParserWithCheckers,
				checkers,
				constraintKindValue,
			},
			create,
			createOrThrow,
			createWithLarge: create,
			createWithLargeOrThrow: createOrThrow,
			createWithUnknown: create,
			createWithUnknownOrThrow: createOrThrow,
			is,
		} satisfies Record<keyof RemoveKind<ConstraintHandler>, unknown>,
		constraintHandlerKind.setTo,
		createConstraint.overrideHandler.apply as AnyFunction,
	);
}

createConstraint.overrideHandler = createOverride<ConstraintHandler>("@duplojs/utils/clean/constraint");

export type GetConstraint<
	GenericConstrainHandler extends ConstraintHandler,
	GenericValue extends DDataParser.Output<GenericConstrainHandler["internal"]["dataParser"]>
	= DDataParser.Output<GenericConstrainHandler["internal"]["dataParser"]>,
> = Extract<
	ConstrainedType<
		GenericConstrainHandler["name"],
		GenericValue
	>,
	any
>;
