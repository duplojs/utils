import { type AnyFunction, createErrorKind, createOverride, type IsEqual, type Kind, kindHeritage, type NeverCoalescing, pipe, type RemoveKind, unwrap, type WrappedValue, wrapValue } from "@scripts/common";
import { createCleanKind } from "../kind";
import * as DDataParser from "../../dataParser";
import * as DEither from "../../either";
import type * as DDate from "../../date";

export type EligiblePrimitive = string | number | boolean | bigint | DDate.TheDate | DDate.TheTime;

export interface Primitive<
	GenericValue extends EligiblePrimitive = EligiblePrimitive,
> extends WrappedValue<GenericValue> {

}

export interface PrimitiveError<GenericName extends string = string> {
	primitiveName: GenericName;
	dataParserError: DDataParser.DataParserError;
}

export const primitiveHandlerKind = createCleanKind("primitive-handler");

export interface PrimitiveHandler<
	GenericName extends string = string,
	GenericValue extends EligiblePrimitive = EligiblePrimitive,
	GenericInput extends unknown = unknown,
> extends Kind<typeof primitiveHandlerKind.definition> {
	readonly name: GenericName;

	/**
	 * @deprecated
	 */
	readonly dataParser: DDataParser.DataParser<
		GenericValue,
		unknown
	>;

	readonly internal: {
		readonly dataParser: DDataParser.DataParser<GenericValue, unknown>;
	};

	/**
	 * {@include clean/primitive/create.md}
	 */
	create<
		GenericData extends GenericValue,
	>(
		data: GenericData
	): (
		| DEither.Right<
			"createPrimitive",
			Primitive<GenericData>
		>
		| DEither.Left<
			"createPrimitiveError",
			PrimitiveError<GenericName>
		>
	);

	create(
		data: GenericInput
	): (
		| DEither.Right<
			"createPrimitive",
			Primitive<GenericValue>
		>
		| DEither.Left<
			"createPrimitiveError",
			PrimitiveError<GenericName>
		>
	);

	/**
	 * {@include clean/primitive/createOrThrow.md}
	 */
	createOrThrow<
		GenericData extends GenericValue,
	>(
		data: GenericData
	): Primitive<GenericData>;

	createOrThrow(
		data: GenericInput
	): Primitive<GenericValue>;

	/**
	 * {@include clean/primitive/createWithLarge.md}
	 */
	createWithLarge(
		data: NeverCoalescing<GenericInput, GenericValue>
	): (
		| DEither.Right<
			"createPrimitive",
			Primitive<GenericValue>
		>
		| DEither.Left<
			"createPrimitiveError",
			PrimitiveError<GenericName>
		>
	);

	/**
	 * {@include clean/primitive/createWithLargeOrThrow.md}
	 */
	createWithLargeOrThrow(
		data: NeverCoalescing<GenericInput, GenericValue>
	): Primitive<GenericValue>;

	/**
	 * {@include clean/primitive/createWithUnknown.md}
	 */
	createWithUnknown<
		GenericData extends unknown,
	>(
		data: GenericData
	): (
		| DEither.Right<
			"createPrimitive",
			Primitive<GenericValue>
		>
		| DEither.Left<
			"createPrimitiveError",
			PrimitiveError<GenericName>
		>
	);

	/**
	 * {@include clean/primitive/createWithUnknownOrThrow.md}
	 */
	createWithUnknownOrThrow<
		GenericData extends unknown,
	>(
		data: GenericData
	): Primitive<GenericValue>;

	/**
	 * {@include clean/primitive/is.md}
	 */
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
		public primitiveName: string,
		public data: unknown,
		public dataParserError: DDataParser.DataParserError,
	) {
		super({}, [`Error when create primitive ${primitiveName}.`]);
	}
}

export function createPrimitive<
	GenericName extends string,
	GenericDataParser extends DDataParser.DataParser<EligiblePrimitive, unknown>,
>(
	name: GenericName,
	dataParser: GenericDataParser,
): PrimitiveHandler<
		GenericName,
		DDataParser.Output<GenericDataParser>,
		IsEqual<DDataParser.Output<GenericDataParser>, DDataParser.Input<GenericDataParser>> extends true
			? never
			: DDataParser.Input<GenericDataParser>
	> {
	function create(data: unknown) {
		const result = dataParser.parse(data);

		if (DEither.isLeft(result)) {
			return DEither.left(
				"createPrimitiveError",
				{
					primitiveName: name,
					dataParserError: unwrap(result),
				} satisfies PrimitiveError,
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
			const { primitiveName, dataParserError } = unwrap(result);
			throw new CreatePrimitiveError(primitiveName, data, dataParserError);
		} else {
			return unwrap(result);
		}
	}

	function is(input: WrappedValue<unknown>) {
		const result = dataParser.parse(unwrap(input));

		return DEither.isRight(result);
	}

	return pipe(
		{
			name,
			dataParser,
			create,
			createOrThrow,
			createWithLarge: create,
			createWithLargeOrThrow: createOrThrow,
			createWithUnknown: create,
			createWithUnknownOrThrow: createOrThrow,
			is,
			internal: {
				dataParser,
			},
		} satisfies Record<keyof RemoveKind<PrimitiveHandler>, unknown>,
		primitiveHandlerKind.setTo,
		createPrimitive.overrideHandler.apply as AnyFunction,
	);
}

createPrimitive.overrideHandler = createOverride<PrimitiveHandler>("@duplojs/utils/clean/primitive");

/**
 * {@include clean/String/index.md}
 */
export const String = createPrimitive("string", DDataParser.string());
export type String = ReturnType<typeof String["createWithUnknownOrThrow"]>;

/**
 * {@include clean/Number/index.md}
 */
export const Number = createPrimitive("number", DDataParser.number());
export type Number = ReturnType<typeof Number["createWithUnknownOrThrow"]>;

/**
 * {@include clean/BigInt/index.md}
 */
export const BigInt = createPrimitive("bigint", DDataParser.bigint());
export type BigInt = ReturnType<typeof BigInt["createWithUnknownOrThrow"]>;

/**
 * {@include clean/Boolean/index.md}
 */
export const Boolean = createPrimitive("boolean", DDataParser.boolean());
export type Boolean = ReturnType<typeof Boolean["createWithUnknownOrThrow"]>;

/**
 * {@include clean/Date/index.md}
 */
export const Date = createPrimitive("date", DDataParser.date());
export type Date = ReturnType<typeof Date["createWithUnknownOrThrow"]>;

/**
 * {@include clean/Time/index.md}
 */
export const Time = createPrimitive("time", DDataParser.time());
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
