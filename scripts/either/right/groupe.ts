import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, pipe, when, isType, type Unwrap, whenNot } from "@scripts/common";
import { type EitherLeft } from "../left";
import { type EitherRight } from "./create";
import * as DObject from "../../object";
import * as DArray from "../../array";
import * as DEither from "../../either";

type Either = EitherRight | EitherLeft;

type ComputeResult<
	GenericGroupe extends Record<string, MayBeGetter<Either>>,
> = (
	| DEither.EitherSuccess<
		SimplifyTopLevel<{
			[Prop in keyof GenericGroupe]: GenericGroupe[Prop] extends AnyFunction
				? Unwrap<
					Extract<
						ReturnType<GenericGroupe[Prop]>,
						EitherRight
					>
				>
				: Unwrap<
					Extract<
						GenericGroupe[Prop],
						EitherRight
					>
				>
		}>
	>
	| {
		[Prop in keyof GenericGroupe]: GenericGroupe[Prop] extends AnyFunction
			? Extract<
				ReturnType<GenericGroupe[Prop]>,
				EitherLeft
			>
			: Extract<
				GenericGroupe[Prop],
				EitherLeft
			>
	}[keyof GenericGroupe]
);

export function groupe<
	GenericGroupe extends Record<string, MayBeGetter<Either>>,
>(
	groupe: GenericGroupe,
) {
	return pipe(
		groupe,
		DObject.entries,
		DArray.reduce(
			DArray.reduceFrom<Record<string, unknown>>({}),
			({ element: [key, value], lastValue, nextWithObject, exit }) => pipe(
				value,
				when(
					isType("function"),
					(getter) => getter(),
				),
				when(
					DEither.isLeft,
					exit,
				),
				DEither.whenIsRight(
					(data) => nextWithObject(
						lastValue,
						{ [key]: data },
					),
				),
			),
		),
		whenNot(
			DEither.isLeft,
			DEither.success,
		),
	) as Extract<
		ComputeResult<GenericGroupe>,
		any
	>;
}
