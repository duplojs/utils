import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, when, isType, type Unwrap, whenNot, asyncPipe, type MaybePromise } from "@scripts/common";
import { type EitherLeft } from "../left";
import { type EitherRight } from "./create";
import * as DObject from "../../object";
import * as DGenerator from "../../generator";
import * as DEither from "..";

type Either = MaybePromise<EitherRight | EitherLeft>;

type ComputeResult<
	GenericGroupe extends Record<string, MayBeGetter<Either>>,
> = Promise<
	| DEither.EitherSuccess<
		SimplifyTopLevel<{
			[Prop in keyof GenericGroupe]: GenericGroupe[Prop] extends AnyFunction
				? Unwrap<
					Extract<
						Awaited<ReturnType<GenericGroupe[Prop]>>,
						EitherRight
					>
				>
				: Unwrap<
					Extract<
						Awaited<GenericGroupe[Prop]>,
						EitherRight
					>
				>
		}>
	>
	| {
		[Prop in keyof GenericGroupe]: GenericGroupe[Prop] extends AnyFunction
			? Extract<
				Awaited<ReturnType<GenericGroupe[Prop]>>,
				EitherLeft
			>
			: Extract<
				Awaited<GenericGroupe[Prop]>,
				EitherLeft
			>
	}[keyof GenericGroupe]
>;

export function asyncGroupe<
	GenericGroupe extends Record<string, MayBeGetter<Either>>,
>(
	groupe: GenericGroupe,
) {
	return asyncPipe(
		groupe,
		DObject.entries,
		DGenerator.asyncReduce(
			DGenerator.reduceFrom<Record<string, unknown>>({}),
			({ element: [key, value], lastValue, nextWithObject, exit }) => asyncPipe(
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
