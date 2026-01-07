import { createErrorKind, type Kind, kindHeritage, unwrap, type WrappedValue, wrapValue } from "@scripts/common";
import { createCleanKind } from "../kind";
import * as DDataParser from "../../dataParser";
import * as DEither from "../../either";

export type EligiblePrimitive = string | number | boolean | bigint;

export interface Primitive<
	GenericValue extends EligiblePrimitive,
> extends WrappedValue<GenericValue> {

}

export const primitiveHandlerKind = createCleanKind("primitive-handler");

export interface PrimitiveHandler<
	GenericValue extends EligiblePrimitive = EligiblePrimitive,
> extends Kind<typeof primitiveHandlerKind.definition> {
	readonly dataParser: DDataParser.Contract<GenericValue>;
	create<
		GenericData extends GenericValue,
	>(
		data: GenericData
	): (
		| DEither.EitherRight<
			"createNewType",
			Primitive<GenericData>
		>
		| DEither.EitherLeft<
			"createNewTypeError",
			DDataParser.DataParserError
		>
	);

	createOrThrow<
		GenericData extends GenericValue,
	>(
		data: GenericData
	): Primitive<GenericData>;

	createWithUnknown<
		GenericData extends unknown,
	>(
		data: GenericData
	): (
		| DEither.EitherRight<
			"createNewType",
			Primitive<GenericValue>
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
	): Primitive<GenericValue>;

	is<
		GenericInput extends WrappedValue,
	>(input: GenericInput): input is Extract<GenericInput, Primitive<GenericValue>>;
}

export class CreatePrimitiveError extends kindHeritage(
	"create-primitive-error",
	createErrorKind("create-primitive-error"),
	Error,
) {
	public constructor(
		public data: unknown,
		public dataParserError: DDataParser.DataParserError,
	) {
		super({}, ["Error when create primitive."]);
	}
}

function createPrimitive<
	GenericDataParser extends DDataParser.Contract<EligiblePrimitive>,
>(
	dataParser: GenericDataParser,
): PrimitiveHandler<
		DDataParser.Output<GenericDataParser>
	> {
	function create(data: unknown) {
		const result = dataParser.parse(data);

		if (DEither.isLeft(result)) {
			return DEither.left(
				"createPrimitiveError",
				unwrap(result),
			);
		} else {
			return DEither.right(
				"createPrimitive",
				wrapValue(unwrap(result)),
			);
		}
	}

	function createOrThrow(data: unknown) {
		const result = create(data);

		if (DEither.isLeft(result)) {
			throw new CreatePrimitiveError(data, unwrap(result));
		} else {
			return unwrap(result);
		}
	}

	function is(input: WrappedValue<unknown>) {
		const result = dataParser.parse(unwrap(input));

		return DEither.isRight(result);
	}

	return primitiveHandlerKind.setTo({
		dataParser,
		create,
		createOrThrow,
		createWithUnknown: create,
		createWithUnknownOrThrow: createOrThrow,
		is,
	}) as never;
}

export const String = createPrimitive(DDataParser.string());
export type String = ReturnType<typeof String["createWithUnknownOrThrow"]>;

export const Number = createPrimitive(DDataParser.number());
export type Number = ReturnType<typeof Number["createWithUnknownOrThrow"]>;

export const BigInt = createPrimitive(DDataParser.bigint());
export type BigInt = ReturnType<typeof BigInt["createWithUnknownOrThrow"]>;

export const Boolean = createPrimitive(DDataParser.boolean());
export type Boolean = ReturnType<typeof Boolean["createWithUnknownOrThrow"]>;

export const Date = createPrimitive(DDataParser.date());
export type Date = ReturnType<typeof Date["createWithUnknownOrThrow"]>;

export const Time = createPrimitive(DDataParser.time());
export type Time = ReturnType<typeof Time["createWithUnknownOrThrow"]>;

export type Primitives = (
	| String
	| Number
	| BigInt
	| Boolean
	| Date
	| Time
);

export type PrimitiveHandlers = (
	| typeof String
	| typeof Number
	| typeof BigInt
	| typeof Boolean
	| typeof Date
	| typeof Time
);
