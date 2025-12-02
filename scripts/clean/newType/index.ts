import { type Kind, type DDataParser, type WrappedValue, unwrap, wrapValue, kindHeritage, createErrorKind, type UnionToIntersection, A } from "@scripts";
import { createCleanKind } from "../kind";
import { type constrainedTypeKind, type ConstraintHandler } from "./constraint";
import * as DEither from "../../either";
import * as DArray from "../../array";

export * from "./constraint";

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
	GenericName extends string,
	GenericValue extends unknown,
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

	createOrThrow<
		GenericDate extends GenericValue,
	>(
		data: GenericDate
	): NewType<
		GenericName,
		GenericDate,
		GenericConstrainHandler[number]["name"]
	>;

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
			readonly DDataParser.DataParserChecker<
				DDataParser.DataParserCheckerDefinition,
				DDataParser.Output<GenericDataParser>
			>[]
		>
		| readonly [
			ConstraintHandler<
				string,
				readonly DDataParser.DataParserChecker<
					DDataParser.DataParserCheckerDefinition,
					DDataParser.Output<GenericDataParser>
				>[]
			>,
			...ConstraintHandler<
				string,
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
	const checkers = A.flatMap(
		DArray.coalescing(constraint ?? []),
		({ checkers }) => checkers,
	);

	const dataParserWithChecker = constraint
		? dataParser.addChecker(...checkers as never)
		: dataParser;

	function create(data: unknown) {
		const result = dataParserWithChecker.parse(data);

		if (DEither.isLeft(result)) {
			return DEither.left(
				"createNewTypeError",
				unwrap(result),
			);
		} else {
			return DEither.right(
				"createNewType",
				newTypeKind.setTo(
					wrapValue(unwrap(result)),
					name,
				),
			) as never;
		}
	}

	function createOrThrow(data: unknown) {
		const result = dataParserWithChecker.parse(data);

		if (DEither.isLeft(result)) {
			throw new CreateNewTypeError(name, data, unwrap(result));
		} else {
			return unwrap(result) as never;
		}
	}

	return {
		name,
		dataParser: dataParserWithChecker,
		create,
		createOrThrow,
		createWithUnknown: create,
		createWithUnknownOrThrow: createOrThrow,
	} as never;
}
