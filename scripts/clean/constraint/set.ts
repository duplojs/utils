import { type Kind, type WrappedValue, unwrap, wrapValue, kindHeritage, createErrorKind, pipe, type UnionToIntersection, type RemoveKind } from "@scripts";
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
	GenericConstrainsHandler extends readonly ConstraintHandler[] = readonly [],
> extends Kind<typeof constraintsSetHandlerKind.definition> {

	/**
	 * {@include clean/createConstraintsSet/primitiveHandler.md}
	 */
	readonly primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>;

	/**
	 * {@include clean/createConstraintsSet/constrains.md}
	 */
	readonly constrains: GenericConstrainsHandler;

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
					GenericConstrainsHandler[number] extends infer InferredConstraint
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
					GenericConstrainsHandler[number] extends infer InferredConstraint
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
			GenericConstrainsHandler[number] extends infer InferredConstraint
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
			GenericConstrainsHandler[number] extends infer InferredConstraint
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
					GenericConstrainsHandler[number] extends infer InferredConstraint
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
			GenericConstrainsHandler[number] extends infer InferredConstraint
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
				GenericConstrainsHandler[number] extends infer InferredConstraint
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
		GenericConstraintName extends GenericConstrainsHandler[number]["name"],
	>(
		name: GenericConstraintName
	): Extract<
		GenericConstrainsHandler[number],
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

/**
 * {@include clean/createConstraintsSet/index.md}
 */
export function createConstraintsSet<
	GenericPrimitiveValue extends EligiblePrimitive,
	const GenericConstrainHandler extends(
		| ConstraintHandler<
			string,
			EligiblePrimitive,
			readonly DDataParser.DataParserChecker<
				DDataParser.DataParserCheckerDefinition,
				GenericPrimitiveValue
			>[]
		>
		| readonly [
			ConstraintHandler<
				string,
				EligiblePrimitive,
				readonly DDataParser.DataParserChecker<
					DDataParser.DataParserCheckerDefinition,
					GenericPrimitiveValue
				>[]
			>,
			...ConstraintHandler<
				string,
				EligiblePrimitive,
				readonly DDataParser.DataParserChecker<
					DDataParser.DataParserCheckerDefinition,
					GenericPrimitiveValue
				>[]
			>[],
		]
	) = never,
>(
	primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>,
	constraint: GenericConstrainHandler,
): ConstraintsSetHandler<
		GenericPrimitiveValue,
		DArray.ArrayCoalescing<
			GenericConstrainHandler
		>
	> {
	const constraints = DArray.coalescing(constraint);

	const checkers = DArray.flatMap(
		constraints,
		({ checkers }) => checkers,
	);

	const dataParserWithCheckers = primitiveHandler
		.dataParser
		.addChecker(...checkers as never);

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

	return constraintsSetHandlerKind.setTo({
		primitiveHandler,
		constrains: constraints,
		getConstraint,
		create,
		createOrThrow,
		createWithUnknown: create,
		createWithUnknownOrThrow: createOrThrow,
		is,
	} satisfies Record<keyof RemoveKind<ConstraintsSetHandler>, unknown>) as never;
}

export type GetConstraints<
	GenericHandler extends ConstraintsSetHandler<string, readonly any[]>,
> = Extract<
	GenericHandler extends any
		? & UnionToIntersection<
			GenericHandler["constrains"][number] extends infer InferredConstraint
				? InferredConstraint extends ConstraintHandler
					? GetConstraint<InferredConstraint>
					: never
				: never
		>
		: never,
	any
>;
