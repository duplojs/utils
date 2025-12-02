import { createErrorKind, kindHeritage, unwrap, type Kind, type WrappedValue } from "@scripts";
import { createCleanKind } from "../kind";
import * as DArray from "../../array";
import * as DEither from "../../either";
import * as DDataParser from "../../dataParser";

export * from "./defaultConstraint";

export const constrainedTypeKind = createCleanKind<
	"constrained-type",
	Record<string, unknown>
>("constrained-type");

export interface ConstrainedType<
	GenericName extends string,
	GenericValue extends unknown,
> extends Kind<
		typeof constrainedTypeKind.definition,
		Record<GenericName, unknown>
	>,
	WrappedValue<GenericValue> {

}

export const constraintHandlerKind = createCleanKind("constraint-handler");

export interface ConstraintHandler<
	GenericName extends string = string,
	GenericCheckers extends readonly DDataParser.DataParserChecker[] = readonly DDataParser.DataParserChecker[],
> extends Kind<typeof constraintHandlerKind.definition> {
	readonly name: GenericName;

	readonly checkers: GenericCheckers;

	create<
		GenericData extends DDataParser.InputChecker<GenericCheckers[number]>,
	>(
		data: GenericData
	): (
		| DEither.EitherRight<
			"createConstrainedType",
			ConstrainedType<GenericName, GenericData>
		>
		| DEither.EitherLeft<
			"createConstrainedTypeError",
			DDataParser.DataParserError
		>
	);

	createOrThrow<
		GenericDate extends DDataParser.InputChecker<GenericCheckers[number]>,
	>(
		data: GenericDate
	): ConstrainedType<GenericName, GenericDate>;

	createWithUnknown<
		GenericData extends unknown,
	>(
		data: GenericData
	): (
		| DEither.EitherRight<
			"createConstrainedType",
			ConstrainedType<GenericName, DDataParser.InputChecker<GenericCheckers[number]>>
		>
		| DEither.EitherLeft<
			"createConstrainedTypeError",
			DDataParser.DataParserError
		>
	);

	createWithUnknownOrThrow<
		GenericData extends unknown,
	>(
		data: GenericData
	): ConstrainedType<GenericName, DDataParser.InputChecker<GenericCheckers[number]>>;
}

export class CreateConstrainedTypeError extends kindHeritage(
	"create-constrained-type-error",
	createErrorKind("create-constrained-type-error"),
	Error,
) {
	public constructor(
		public constrainedTypeName: string,
		public data: unknown,
		public dataParserError: DDataParser.DataParserError,
	) {
		super({}, [`Error when create constrained type ${constrainedTypeName}.`]);
	}
}

export function createConstraint<
	GenericName extends string,
	GenericCheckerInput extends unknown,
	const GenericChecker extends(
		| DDataParser.DataParserChecker<
			DDataParser.DataParserCheckerDefinition,
			GenericCheckerInput
		>
		| readonly [
			DDataParser.DataParserChecker<
				DDataParser.DataParserCheckerDefinition,
				GenericCheckerInput
			>,
			...DDataParser.DataParserChecker<
				DDataParser.DataParserCheckerDefinition,
				NoInfer<GenericCheckerInput>
			>[],
		]
	) = never,
>(
	name: GenericName,
	checker: GenericChecker,
): ConstraintHandler<
		GenericName,
		DArray.ArrayCoalescing<GenericChecker>
	> {
	const checkers = DArray.coalescing(checker);

	function create(data: GenericCheckerInput) {
		let value = data;
		// eslint-disable-next-line @typescript-eslint/prefer-for-of
		for (let index = 0; index < checkers.length; index++) {
			const result = checkers[index]!.exec(value, checkers[index]!);

			if (result === DDataParser.SymbolDataParserErrorIssue) {
				return DEither.left(
					"createConstrainedTypeError",
					DDataParser.addIssue(
						DDataParser.createError(),
						checkers[index]!,
						result,
					),
				);
			}

			value = result;
		}

		return DEither.right(
			"createConstrainedType",
			value,
		);
	}

	function createOrThrow(data: GenericCheckerInput) {
		const result = create(data);

		if (DEither.isLeft(result)) {
			throw new CreateConstrainedTypeError(name, data, unwrap(result));
		} else {
			return unwrap(result) as never;
		}
	}

	return {
		name,
		checkers,
		create,
		createOrThrow,
		createWithUnknown: create,
		createWithUnknownOrThrow: createOrThrow,
	} as never;
}

export type Constraint<
	GenericConstrainHandler extends ConstraintHandler,
	GenericValue extends DDataParser.InputChecker<GenericConstrainHandler["checkers"][number]>
	= DDataParser.InputChecker<GenericConstrainHandler["checkers"][number]>,
> = Extract<
	ConstrainedType<
		GenericConstrainHandler["name"],
		GenericValue
	>,
	any
>;
