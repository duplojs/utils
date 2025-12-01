import { DEither, type Kind, type DDataParser, type WrappedValue, unwrap, wrapValue, kindHeritage, createErrorKind } from "@scripts";
import { createCleanKind } from "./kind";

export const newTypeKind = createCleanKind<"new-type", string>("new-type");

export interface NewType<
	GenericName extends string,
	GenericValue extends unknown,
> extends Kind<
		typeof newTypeKind.definition,
		GenericName
	>,
	WrappedValue<GenericValue> {

}

export const newTypeHandlerKind = createCleanKind("new-type-handler");

export interface NewTypeHandler<
	GenericName extends string,
	GenericValue extends unknown,
> extends Kind<typeof newTypeHandlerKind.definition> {
	readonly name: GenericName;

	readonly dataParser: DDataParser.Contract<GenericValue>;

	create<
		GenericData extends GenericValue,
	>(
		data: GenericData
	): (
		| DEither.EitherRight<
			"createNewType",
			NewType<GenericName, GenericData>
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
	): NewType<GenericName, GenericDate>;

	createWithUnknown<
		GenericData extends unknown,
	>(
		data: GenericData
	): (
		| DEither.EitherRight<
			"createNewType",
			NewType<GenericName, GenericValue>
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
	): NewType<GenericName, GenericValue>;
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
>(
	name: GenericName,
	dataParser: GenericDataParser,
): NewTypeHandler<
		GenericName,
		DDataParser.Output<GenericDataParser>
	> {
	function create(data: unknown) {
		const result = dataParser.parse(data);

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
		const result = dataParser.parse(data);

		if (DEither.isLeft(result)) {
			throw new CreateNewTypeError(name, data, unwrap(result));
		} else {
			return unwrap(result) as never;
		}
	}

	return {
		name,
		dataParser,
		create,
		createOrThrow,
		createWithUnknown: create,
		createWithUnknownOrThrow: createOrThrow,
	} as never;
}
