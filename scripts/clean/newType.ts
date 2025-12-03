import { type Kind, type DDataParser, type WrappedValue, unwrap, wrapValue, kindHeritage, createErrorKind, A, type Unwrap, pipe } from "@scripts";
import { createCleanKind } from "./kind";
import { constrainedTypeKind, type ConstraintHandler } from "./constraint";
import { type Primitive, type EligiblePrimitive } from "./primitive";
import * as DEither from "../either";
import * as DArray from "../array";
import * as DObject from "../object";

export const newTypeKind = createCleanKind<"new-type", string>("new-type");

type _NewType<
	GenericName extends string,
	GenericValue extends unknown,
	GenericConstrainName extends string,
> = (
	& Kind<
		typeof newTypeKind.definition,
		GenericName
	>
	& Kind<
		typeof constrainedTypeKind.definition,
		Record<GenericConstrainName, unknown>
	>
	& WrappedValue<GenericValue>
);

export interface NewType<
	GenericName extends string = string,
	GenericValue extends unknown = unknown,
	GenericConstrainName extends string = never,
> extends _NewType<GenericName, GenericValue, GenericConstrainName> {

}

export const newTypeHandlerKind = createCleanKind("new-type-handler");

export interface NewTypeHandler<
	GenericName extends string = string,
	GenericValue extends unknown = unknown,
	GenericConstrainHandler extends readonly ConstraintHandler[] = readonly [],
> extends Kind<typeof newTypeHandlerKind.definition> {
	readonly name: GenericName;

	readonly dataParser: DDataParser.Contract<GenericValue>;

	readonly constrains: GenericConstrainHandler;

	create<
		GenericData extends GenericValue,
	>(
		data: GenericData
	): (
		| DEither.EitherRight<
			"createNewType",
			NewType<
				GenericName,
				GenericData,
				GenericConstrainHandler[number]["name"]
			>
		>
		| DEither.EitherLeft<
			"createNewTypeError",
			DDataParser.DataParserError
		>
	);

	create<
		GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>,
	>(
		data: GenericPrimitive
	): (
		| DEither.EitherRight<
			"createConstrainedType",
			(
				& GenericPrimitive
				& NewType<
					GenericName,
					Unwrap<GenericPrimitive>,
					GenericConstrainHandler[number]["name"]
				>
			)
		>
		| DEither.EitherLeft<
			"createConstrainedTypeError",
			DDataParser.DataParserError
		>
	);

	createOrThrow<
		GenericData extends GenericValue,
	>(
		data: GenericData
	): NewType<
		GenericName,
		GenericData,
		GenericConstrainHandler[number]["name"]
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
			GenericConstrainHandler[number]["name"]
		>
	);

	createWithUnknown<
		GenericData extends unknown,
	>(
		data: GenericData
	): (
		| DEither.EitherRight<
			"createNewType",
			NewType<
				GenericName,
				GenericValue,
				GenericConstrainHandler[number]["name"]
			>
		>
		| DEither.EitherLeft<
			"createNewTypeError",
			DDataParser.DataParserError
		>
	);

	createWithUnknownOrThrow<
		GenericData extends unknown,
	>(
		data: GenericData
	): NewType<
		GenericName,
		GenericValue,
		GenericConstrainHandler[number]["name"]
	>;

	is<
		GenericInput extends WrappedValue,
	>(input: GenericInput): input is Extract<
		GenericInput,
		NewType<
			GenericName,
			GenericValue,
			GenericConstrainHandler[number]["name"]
		>
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

export function createNewType<
	GenericName extends string,
	GenericDataParser extends DDataParser.DataParser,
	const GenericConstrainHandler extends(
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
	dataParser: GenericDataParser,
	constraint?: GenericConstrainHandler,
): NewTypeHandler<
		GenericName,
		DDataParser.Output<GenericDataParser>,
		DArray.ArrayCoalescing<GenericConstrainHandler>
	> {
	const constrains = DArray.coalescing(constraint ?? []);

	const checkers = A.flatMap(
		constrains,
		({ checkers }) => checkers,
	);

	const dataParserWithCheckers = constraint
		? dataParser.addChecker(...checkers as never)
		: dataParser;

	const constraintKindValue = pipe(
		constrains,
		DArray.map(({ name }) => DObject.entry(name, null)),
		DObject.fromEntries,
	);

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
		for (let index = 0; index < constrains.length; index++) {
			if (!constrains[index]!.is(input)) {
				return false;
			}
		}

		return true;
	}

	return {
		name,
		dataParser: dataParserWithCheckers,
		create,
		createOrThrow,
		createWithUnknown: create,
		createWithUnknownOrThrow: createOrThrow,
		is,
	} as never;
}
