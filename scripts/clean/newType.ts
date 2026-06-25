import { type Kind, type WrappedValue, unwrap, wrapValue, kindHeritage, createErrorKind, type Unwrap, pipe, type DeepReadonly, type RemoveKind, createOverride, type AnyFunction, type IsEqual, type DP, type NeverCoalescing, type IsNever } from "@scripts";
import { createCleanKind } from "./kind";
import { constrainedTypeKind, type ConstraintsHandlerArguments, constraintsSetHandlerKind, type ConstraintHandler, type ExtractConstraintSetConstraintHandlers } from "./constraint";
import { type Primitive, type EligiblePrimitive, type PrimitiveHandlers, type PrimitiveHandler } from "./primitive";
import * as DEither from "../either";
import * as DArray from "../array";
import * as DObject from "../object";
import * as DDataParser from "../dataParser";
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

export interface NewTypeError<GenericName extends string = string> {
	newTypeName: GenericName;
	dataParserError: DDataParser.DataParserError;
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
	 * @deprecated
	 */
	readonly dataParser: DDataParser.DataParser<GenericValue, unknown>;

	/**
	 * @deprecated
	 */
	readonly constraints: GenericConstraintsHandler;

	readonly internal: {

		/**
		 * {@include clean/createNewType/dataParser.md}
		 */
		readonly dataParser: DDataParser.DataParser<GenericValue, unknown>;

		/**
		 * {@include clean/createNewType/constraints.md}
		 */
		readonly constraints: GenericConstraintsHandler;

		/**
		 * {@include clean/createNewType/constraintKindValue.md}
		 */
		readonly constraintKindValue: Record<string, null>;
	};

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
			NewTypeError<GenericName>
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
			NewTypeError<GenericName>
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
			NewTypeError<GenericName>
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
			NewTypeError<GenericName>
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
	GenericDataParser extends DDataParser.DataParserBase,
	GenericDataParserError extends DataParserContainTransform<GenericDataParser>,
	const GenericConstraintsHandler extends ConstraintsHandlerArguments<
		Extract<DDataParser.Output<GenericDataParser>, EligiblePrimitive>
	> = never,
	GenericConstraints extends ExtractConstraintSetConstraintHandlers<
		GenericConstraintsHandler
	> = ExtractConstraintSetConstraintHandlers<
		GenericConstraintsHandler
	>,
	GenericValue extends DDataParser.ApplyRefinementOfChecker<
		DDataParser.Output<GenericDataParser>,
		GenericConstraints[number]["internal"]["checkers"][number]
	> = DDataParser.ApplyRefinementOfChecker<
		DDataParser.Output<GenericDataParser>,
		GenericConstraints[number]["internal"]["checkers"][number]
	>,
>(
	name: GenericName,
	dataParser: GenericDataParser & NoInfer<GenericDataParserError>,
	constraint?: GenericConstraintsHandler,
): NewTypeHandler<
	GenericName,
	DeepReadonly<GenericValue>,
	GenericConstraints,
	IsEqual<GenericValue, DDataParser.Input<GenericDataParser>> extends true
		? never
		: DDataParser.Input<GenericDataParser>
>;

export function createNewType<
	GenericName extends string,
	GenericPrimitiveHandler extends PrimitiveHandlers,
	const GenericConstraintsHandler extends ConstraintsHandlerArguments<
		Extract<DDataParser.Output<GenericPrimitiveHandler["internal"]["dataParser"]>, EligiblePrimitive>
	> = never,
	GenericConstraints extends ExtractConstraintSetConstraintHandlers<
		GenericConstraintsHandler
	> = ExtractConstraintSetConstraintHandlers<
		GenericConstraintsHandler
	>,
	GenericValue extends DDataParser.ApplyRefinementOfChecker<
		DDataParser.Output<GenericPrimitiveHandler["internal"]["dataParser"]>,
		GenericConstraints[number]["internal"]["checkers"][number]
	> = DDataParser.ApplyRefinementOfChecker<
		DDataParser.Output<GenericPrimitiveHandler["internal"]["dataParser"]>,
		GenericConstraints[number]["internal"]["checkers"][number]
	>,
>(
	name: GenericName,
	primitiveHandler: GenericPrimitiveHandler,
	constraint?: GenericConstraintsHandler,
): NewTypeHandler<
	GenericName,
	GenericValue,
	NoInfer<GenericConstraints>,
	GenericPrimitiveHandler extends PrimitiveHandler<any, infer InferredValue, infer InferredInput>
		? IsNever<InferredInput> extends true
			? IsEqual<InferredValue, GenericValue> extends true
				? never
				: InferredValue
			: InferredInput
		: never
>;

export function createNewType(
	name: string,
	maybeDataParser: DP.DataParser | PrimitiveHandlers,
	constraint?: ConstraintsHandlerArguments,
): any {
	const constraints = DArray.flatMap(
		DArray.coalescing(constraint ?? []),
		(constraint) => constraintsSetHandlerKind.has(constraint)
			? constraint.internal.constraints
			: constraint,
	);

	const checkers = DArray.flatMap(
		constraints,
		({ internal }) => internal.checkers,
	);

	const dataParser = DDataParser.dataParserKind.has(maybeDataParser)
		? maybeDataParser
		: maybeDataParser.internal.dataParser;

	const dataParserWithCheckers = constraint
		? dataParser.addChecker(...checkers)
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
				{
					newTypeName: name,
					dataParserError: unwrap(result),
				} satisfies NewTypeError,
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
			const { newTypeName, dataParserError } = unwrap(result);
			throw new CreateNewTypeError(newTypeName, data, dataParserError);
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
			internal: {
				dataParser: dataParserWithCheckers,
				constraints,
				constraintKindValue,
			},
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
	GenericValue extends DDataParser.Output<GenericHandler["internal"]["dataParser"]> = DDataParser.Output<GenericHandler["internal"]["dataParser"]>,
> = Extract<
	GenericHandler extends any
		? NewType<
			GenericHandler["name"],
			GenericValue,
			GenericHandler["internal"]["constraints"][number]["name"]
		>
		: never,
	any
>;
