import { type Kind, type WrappedValue, unwrap, wrapValue, kindHeritage, createErrorKind, type Unwrap, pipe, type NeverCoalescing, type DeepReadonly, type RemoveKind, createOverride, type AnyFunction, type IsEqual } from "@scripts";
import { createCleanKind } from "./kind";
import { constrainedTypeKind, type ConstraintHandler } from "./constraint";
import { type Primitive, type EligiblePrimitive } from "./primitive";
import * as DEither from "../either";
import * as DArray from "../array";
import * as DObject from "../object";
import type * as DDataParser from "../dataParser";
import { type DataParserContainTransform } from "./types";

export const newTypeKind = createCleanKind<"new-type", string>("new-type");

type _NewType<
	GenericName extends string,
	GenericValue extends unknown,
	GenericConstraintsName extends string,
> = (
	& Kind<
		typeof newTypeKind.definition,
		GenericName
	>
	& Kind<
		typeof constrainedTypeKind.definition,
		Record<GenericConstraintsName, unknown>
	>
	& WrappedValue<GenericValue>
);

export interface NewType<
	GenericName extends string = string,
	GenericValue extends unknown = unknown,
	GenericConstraintsName extends string = never,
> extends _NewType<GenericName, GenericValue, GenericConstraintsName> {

}

export const newTypeHandlerKind = createCleanKind("new-type-handler");

export interface NewTypeHandler<
	GenericName extends string = string,
	GenericValue extends unknown = unknown,
	GenericConstraintsHandler extends readonly ConstraintHandler[] = readonly ConstraintHandler[],
	GenericInput extends unknown = unknown,
> extends Kind<typeof newTypeHandlerKind.definition> {

	/**
	 * {@include clean/createNewType/name.md}
	 */
	readonly name: GenericName;

	/**
	 * {@include clean/createNewType/dataParser.md}
	 */
	readonly dataParser: DDataParser.Contract<GenericValue, unknown>;

	/**
	 * {@include clean/createNewType/constraints.md}
	 */
	readonly constraints: GenericConstraintsHandler;

	/**
	 * {@include clean/createNewType/create.md}
	 */
	create<
		const GenericInput extends GenericValue,
	>(
		data: GenericInput
	): (
		| DEither.Right<
			"createNewType",
			NewType<
				GenericName,
				GenericInput,
				GenericConstraintsHandler[number]["name"]
			>
		>
		| DEither.Left<
			"createNewTypeError",
			DDataParser.DataParserError
		>
	);
	create(
		data: GenericValue
	): (
		| DEither.Right<
			"createNewType",
			NewType<
				GenericName,
				GenericInput,
				GenericConstraintsHandler[number]["name"]
			>
		>
		| DEither.Left<
			"createNewTypeError",
			DDataParser.DataParserError
		>
	);

	create<
		GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>,
	>(
		data: GenericPrimitive
	): (
		| DEither.Right<
			"createNewType",
			(
				& GenericPrimitive
				& NewType<
					GenericName,
					Unwrap<GenericPrimitive>,
					GenericConstraintsHandler[number]["name"]
				>
			)
		>
		| DEither.Left<
			"createNewTypeError",
			DDataParser.DataParserError
		>
	);

	/**
	 * {@include clean/createNewType/createOrThrow.md}
	 */
	createOrThrow<
		const GenericData extends GenericValue,
	>(
		data: GenericData
	): NewType<
		GenericName,
		GenericData,
		GenericConstraintsHandler[number]["name"]
	>;

	createOrThrow(
		data: GenericInput
	): NewType<
		GenericName,
		GenericValue,
		GenericConstraintsHandler[number]["name"]
	>;

	createOrThrow<
		GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>,
	>(
		data: GenericPrimitive
	): (
		& GenericPrimitive
		& NewType<
			GenericName,
			Unwrap<GenericPrimitive>,
			GenericConstraintsHandler[number]["name"]
		>
	);

	/**
	 * {@include clean/createNewType/createWithUnknown.md}
	 */
	createWithUnknown<
		GenericInput extends unknown,
	>(
		data: GenericInput
	): (
		| DEither.Right<
			"createNewType",
			NewType<
				GenericName,
				GenericValue,
				GenericConstraintsHandler[number]["name"]
			>
		>
		| DEither.Left<
			"createNewTypeError",
			DDataParser.DataParserError
		>
	);

	/**
	 * {@include clean/createNewType/createWithUnknownOrThrow.md}
	 */
	createWithUnknownOrThrow<
		GenericInput extends unknown,
	>(
		data: GenericInput
	): NewType<
		GenericName,
		GenericValue,
		GenericConstraintsHandler[number]["name"]
	>;

	/**
	 * {@include clean/createNewType/is.md}
	 */
	is<
		GenericInput extends WrappedValue,
	>(input: GenericInput): input is Extract<
		GenericInput,
		NewType<
			GenericName,
			GenericValue,
			GenericConstraintsHandler[number]["name"]
		>
	>;

	/**
	 * {@include clean/createNewType/getConstraint.md}
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

export class CreateNewTypeError extends kindHeritage(
	"create-new-type-error",
	createErrorKind("create-new-type-error"),
	Error,
) {
	public constructor(
		public newTypeName: string,
		public data: unknown,
		public dataParserError: DDataParser.DataParserError,
	) {
		super({}, [`Error when create new type ${newTypeName}.`]);
	}
}

/**
 * {@include clean/createNewType/index.md}
 */
export function createNewType<
	GenericName extends string,
	GenericDataParser extends DDataParser.DataParser,
	const GenericConstraintsHandler extends(
		| ConstraintHandler<
			string,
			EligiblePrimitive,
			readonly DDataParser.DataParserChecker<
				DDataParser.DataParserCheckerDefinition,
				DDataParser.Output<GenericDataParser>
			>[]
		>
		| readonly [
			ConstraintHandler<
				string,
				EligiblePrimitive,
				readonly DDataParser.DataParserChecker<
					DDataParser.DataParserCheckerDefinition,
					DDataParser.Output<GenericDataParser>
				>[]
			>,
			...ConstraintHandler<
				string,
				EligiblePrimitive,
				readonly DDataParser.DataParserChecker<
					DDataParser.DataParserCheckerDefinition,
					DDataParser.Output<GenericDataParser>
				>[]
			>[],
		]
	) = never,
>(
	name: GenericName,
	dataParser: GenericDataParser & DataParserContainTransform<GenericDataParser>,
	constraint?: GenericConstraintsHandler,
): NewTypeHandler<
		GenericName,
		DeepReadonly<DDataParser.Output<GenericDataParser>>,
		DArray.ArrayCoalescing<
			NeverCoalescing<GenericConstraintsHandler, readonly []>
		>,
		IsEqual<DDataParser.Output<GenericDataParser>, DDataParser.Input<GenericDataParser>> extends true
			? never
			: DDataParser.Input<GenericDataParser>
	> {
	const constraints = DArray.coalescing(constraint ?? []);

	const checkers = DArray.flatMap(
		constraints,
		({ checkers }) => checkers,
	);

	const dataParserWithCheckers = constraint
		? dataParser.addChecker(...checkers as never)
		: dataParser;

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
				"createNewTypeError",
				unwrap(result),
			);
		} else if (constrainedTypeKind.has(data)) {
			return DEither.right(
				"createNewType",
				newTypeKind.setTo(
					constrainedTypeKind.addTo(
						data,
						{
							...constrainedTypeKind.getValue(data),
							...constraintKindValue,
						},
					) as never,
					name,
				),
			);
		} else {
			return DEither.right(
				"createNewType",
				newTypeKind.setTo(
					constrainedTypeKind.setTo(
						wrapValue(unwrap(result)),
						constraintKindValue,
					),
					name,
				),
			);
		}
	}

	function createOrThrow(data: unknown) {
		const result = create(data);

		if (DEither.isLeft(result)) {
			throw new CreateNewTypeError(name, data, unwrap(result));
		} else {
			return unwrap(result);
		}
	}

	function is(input: WrappedValue<unknown>) {
		if (
			!newTypeKind.has(input)
			|| newTypeKind.getValue(input) !== name
		) {
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
			name,
			dataParser: dataParserWithCheckers,
			constraints,
			getConstraint,
			create,
			createOrThrow,
			createWithUnknown: create,
			createWithUnknownOrThrow: createOrThrow,
			is,
		} satisfies Record<keyof RemoveKind<NewTypeHandler>, unknown>,
		newTypeHandlerKind.setTo,
		createNewType.overrideHandler.apply as AnyFunction,
	);
}

createNewType.overrideHandler = createOverride<NewTypeHandler>("@duplojs/utils/clean/new-type");

export type GetNewType<
	GenericHandler extends NewTypeHandler<string, unknown, readonly any[]>,
> = Extract<
	GenericHandler extends any
		? NewType<
			GenericHandler["name"],
			DDataParser.Output<GenericHandler["dataParser"]>,
			GenericHandler["constraints"][number]["name"]
		>
		: never,
	any
>;
