import { type Kind, type WrappedValue, unwrap, wrapValue, kindHeritage, createErrorKind, pipe, type UnionToIntersection, type RemoveKind, createOverride, type AnyFunction } from "@scripts";
import { createCleanKind } from "../kind";
import { constrainedTypeKind, type GetConstraint, type ConstraintHandler } from "../constraint";
import { type Primitive, type EligiblePrimitive, type PrimitiveHandler } from "../primitive";
import * as DEither from "../../either";
import * as DArray from "../../array";
import * as DObject from "../../object";
import type * as DDataParser from "../../dataParser";

export const constraintsSetHandlerKind = createCleanKind("constraints-set-handler");

export interface ConstraintsSetHandler<
	GenericPrimitiveValue extends EligiblePrimitive = EligiblePrimitive,
	GenericConstraintsHandler extends readonly ConstraintHandler[] = readonly [],
	GenericPrimitiveInput extends unknown = unknown,
> extends Kind<typeof constraintsSetHandlerKind.definition> {

	/**
	 * @deprecated
	 */
	readonly primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>;

	/**
	 * @deprecated
	 */
	readonly constraints: GenericConstraintsHandler;

	readonly internal: {

		/**
		 * {@include clean/createConstraintsSet/dataParser.md}
		 */
		readonly dataParser: DDataParser.DataParser<GenericPrimitiveValue, unknown>;

		/**
		 * {@include clean/createConstraintsSet/primitiveHandler.md}
		 */
		readonly primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>;

		/**
		 * {@include clean/createConstraintsSet/constraints.md}
		 */
		readonly constraints: GenericConstraintsHandler;

		/**
		 * {@include clean/createConstraintsSet/constraintKindValue.md}
		 */
		readonly constraintKindValue: Record<string, null>;
	};

	/**
	 * {@include clean/createConstraintsSet/create.md}
	 */
	create<
		const GenericInput extends GenericPrimitiveValue,
	>(
		data: GenericInput
	): (
		| DEither.Right<
			"createConstraintsSet",
			(
				& Primitive<GenericInput>
				& UnionToIntersection<
					GenericConstraintsHandler[number] extends infer InferredConstraint
						? InferredConstraint extends ConstraintHandler
							? GetConstraint<InferredConstraint>
							: never
						: never
				>
			)
		>
		| DEither.Left<
			"createConstraintsSetError",
			DDataParser.DataParserError
		>
	);

	create(
		data: GenericPrimitiveInput
	): (
		| DEither.Right<
			"createConstraintsSet",
			(
				& Primitive<GenericPrimitiveValue>
				& UnionToIntersection<
					GenericConstraintsHandler[number] extends infer InferredConstraint
						? InferredConstraint extends ConstraintHandler
							? GetConstraint<InferredConstraint>
							: never
						: never
				>
			)
		>
		| DEither.Left<
			"createConstraintsSetError",
			DDataParser.DataParserError
		>
	);

	create<
		GenericPrimitive extends Primitive<GenericPrimitiveValue>,
	>(
		data: GenericPrimitive
	): (
		| DEither.Right<
			"createConstraintsSet",
			(
				& GenericPrimitive
				& UnionToIntersection<
					GenericConstraintsHandler[number] extends infer InferredConstraint
						? InferredConstraint extends ConstraintHandler
							? GetConstraint<InferredConstraint>
							: never
						: never
				>
			)
		>
		| DEither.Left<
			"createConstraintsSetError",
			DDataParser.DataParserError
		>
	);

	/**
	 * {@include clean/createConstraintsSet/createOrThrow.md}
	 */
	createOrThrow<
		const GenericInput extends GenericPrimitiveValue,
	>(
		data: GenericInput
	): (
		& Primitive<GenericInput>
		& UnionToIntersection<
			GenericConstraintsHandler[number] extends infer InferredConstraint
				? InferredConstraint extends ConstraintHandler
					? GetConstraint<InferredConstraint>
					: never
				: never
		>
	);

	createOrThrow(
		data: GenericPrimitiveInput
	): (
		& Primitive<GenericPrimitiveValue>
		& UnionToIntersection<
			GenericConstraintsHandler[number] extends infer InferredConstraint
				? InferredConstraint extends ConstraintHandler
					? GetConstraint<InferredConstraint>
					: never
				: never
		>
	);

	createOrThrow<
		GenericPrimitive extends Primitive<GenericPrimitiveValue>,
	>(
		data: GenericPrimitive
	): (
		& GenericPrimitive
		& UnionToIntersection<
			GenericConstraintsHandler[number] extends infer InferredConstraint
				? InferredConstraint extends ConstraintHandler
					? GetConstraint<InferredConstraint>
					: never
				: never
		>
	);

	/**
	 * {@include clean/createConstraintsSet/createWithUnknown.md}
	 */
	createWithUnknown<
		GenericInput extends unknown,
	>(
		data: GenericInput
	): (
		| DEither.Right<
			"createConstraintsSet",
			(
				& Primitive<GenericPrimitiveValue>
				& UnionToIntersection<
					GenericConstraintsHandler[number] extends infer InferredConstraint
						? InferredConstraint extends ConstraintHandler
							? GetConstraint<InferredConstraint>
							: never
						: never
				>
			)
		>
		| DEither.Left<
			"createConstraintsSetError",
			DDataParser.DataParserError
		>
	);

	/**
	 * {@include clean/createConstraintsSet/createWithUnknownOrThrow.md}
	 */
	createWithUnknownOrThrow<
		GenericInput extends unknown,
	>(
		data: GenericInput
	): (
		& Primitive<GenericPrimitiveValue>
		& UnionToIntersection<
			GenericConstraintsHandler[number] extends infer InferredConstraint
				? InferredConstraint extends ConstraintHandler
					? GetConstraint<InferredConstraint>
					: never
				: never
		>
	);

	/**
	 * {@include clean/createConstraintsSet/is.md}
	 */
	is<
		GenericInput extends WrappedValue,
	>(input: GenericInput): input is Extract<
		GenericInput,
		(
			& Primitive<GenericPrimitiveValue>
			& UnionToIntersection<
				GenericConstraintsHandler[number] extends infer InferredConstraint
					? InferredConstraint extends ConstraintHandler
						? GetConstraint<InferredConstraint>
						: never
					: never
			>
		)
	>;

	/**
	 * {@include clean/createConstraintsSet/getConstraint.md}
	 */
	getConstraint<
		GenericConstraintName extends GenericConstraintsHandler[number]["name"],
	>(
		name: GenericConstraintName
	): Extract<
		GenericConstraintsHandler[number],
		ConstraintHandler<GenericConstraintName>
	>;
}

export class CreateConstraintsSetError extends kindHeritage(
	"create-constraint-set-error",
	createErrorKind("create-constraint-set-error"),
	Error,
) {
	public constructor(
		public data: unknown,
		public dataParserError: DDataParser.DataParserError,
	) {
		super({}, ["Error when create constrained type with set."]);
	}
}

export type ConstraintSetInputConstraint<
	GenericValue extends EligiblePrimitive = EligiblePrimitive,
> = (
	ConstraintHandler<
		string,
		GenericValue,
		readonly DDataParser.DataParserChecker<
			GenericValue
		>[]
	>
	| ConstraintsSetHandler<
		GenericValue,
		readonly ConstraintHandler<
			string,
			GenericValue,
			readonly DDataParser.DataParserChecker<
				GenericValue
			>[]
		>[]
	>
);

export type ConstraintsHandlerArguments<
	GenericValue extends EligiblePrimitive,
> = (
	| ConstraintSetInputConstraint<GenericValue>
	| readonly [
		ConstraintSetInputConstraint<GenericValue>,
		...ConstraintSetInputConstraint<GenericValue>[],
	]
);

export type ExtractConstraintSetConstraintHandlers<
	GenericConstraint extends (
		| ConstraintSetInputConstraint<any>
		| readonly ConstraintSetInputConstraint<any>[]
		| readonly []
	),
> = GenericConstraint extends ConstraintHandler<any, any, any, any>
	? readonly [GenericConstraint]
	: GenericConstraint extends ConstraintsSetHandler<any, any, any>
		? ExtractConstraintSetConstraintHandlers<GenericConstraint["internal"]["constraints"]>
		: GenericConstraint extends readonly []
			? GenericConstraint
			: GenericConstraint extends readonly [
				infer InferredFirst extends ConstraintSetInputConstraint<any>,
				...infer InferredRest extends readonly ConstraintSetInputConstraint<any>[],
			]
				? ExtractConstraintSetConstraintHandlers<InferredRest> extends infer
				InferredResultRest extends readonly any[]
					? readonly [
						...ExtractConstraintSetConstraintHandlers<InferredFirst>,
						...InferredResultRest,
					]
					: never
				: never;

/**
 * {@include clean/createConstraintsSet/index.md}
 */
export function createConstraintsSet<
	GenericPrimitiveValue extends EligiblePrimitive,
	GenericPrimitiveInput extends unknown,
	const GenericConstrainHandler extends ConstraintsHandlerArguments<GenericPrimitiveValue> = never,
>(
	primitiveHandler: PrimitiveHandler<GenericPrimitiveValue, GenericPrimitiveInput>,
	constraint: GenericConstrainHandler,
): ConstraintsSetHandler<
		GenericPrimitiveValue,
		ExtractConstraintSetConstraintHandlers<GenericConstrainHandler>,
		GenericPrimitiveInput
	> {
	const constraints = DArray.flatMap(
		DArray.coalescing(constraint),
		(constraint) => constraintsSetHandlerKind.has(constraint)
			? constraint.internal.constraints
			: constraint,
	) as ConstraintHandler[];

	const checkers = DArray.flatMap(
		constraints,
		({ internal }) => internal.checkers,
	);

	const dataParserWithCheckers = primitiveHandler
		.dataParser
		.addChecker(...checkers);

	const constraintKindValue = pipe(
		constraints,
		DArray.map(({ name }) => DObject.entry(name, null)),
		DObject.fromEntries,
	);

	const wrappedConstraints = pipe(
		constraints,
		DArray.map((constrain) => DObject.entry(constrain.name, constrain)),
		DObject.fromEntries,
	);

	function getConstraint(name: string) {
		return wrappedConstraints[name];
	}

	function create(data: any) {
		const result = dataParserWithCheckers.parse(unwrap(data));

		if (DEither.isLeft(result)) {
			return DEither.left(
				"createConstraintsSetError",
				unwrap(result),
			);
		} else if (constrainedTypeKind.has(data)) {
			return DEither.right(
				"createConstraintsSet",
				constrainedTypeKind.addTo(
					data,
					{
						...constrainedTypeKind.getValue(data),
						...constraintKindValue,
					},
				) as never,
			);
		} else {
			return DEither.right(
				"createConstraintsSet",
				constrainedTypeKind.setTo(
					wrapValue(unwrap(result)),
					constraintKindValue,
				),
			);
		}
	}

	function createOrThrow(data: unknown) {
		const result = create(data);

		if (DEither.isLeft(result)) {
			throw new CreateConstraintsSetError(data, unwrap(result));
		} else {
			return unwrap(result);
		}
	}

	function is(input: WrappedValue<unknown>) {
		if (!constrainedTypeKind.has(input)) {
			return false;
		}

		// eslint-disable-next-line @typescript-eslint/prefer-for-of
		for (let index = 0; index < constraints.length; index++) {
			if (!constraints[index]!.is(input)) {
				return false;
			}
		}

		return true;
	}

	return pipe(
		{
			primitiveHandler,
			constraints,
			internal: {
				primitiveHandler,
				constraints,
				constraintKindValue,
				dataParser: dataParserWithCheckers,
			},
			getConstraint,
			create,
			createOrThrow,
			createWithUnknown: create,
			createWithUnknownOrThrow: createOrThrow,
			is,
		} satisfies Record<keyof RemoveKind<ConstraintsSetHandler>, unknown>,
		constraintsSetHandlerKind.setTo,
		createConstraintsSet.overrideHandler.apply as AnyFunction,
	);
}

createConstraintsSet.overrideHandler = createOverride<ConstraintsSetHandler>("@duplojs/utils/clean/constraints-set");

export type GetConstraints<
	GenericHandler extends ConstraintsSetHandler<EligiblePrimitive, readonly any[]>,
> = Extract<
	GenericHandler extends any
		? & UnionToIntersection<
			GenericHandler["internal"]["constraints"][number] extends infer InferredConstraint
				? InferredConstraint extends ConstraintHandler
					? GetConstraint<InferredConstraint>
					: never
				: never
		>
		: never,
	any
>;
