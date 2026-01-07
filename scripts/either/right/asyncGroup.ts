import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, when, isType, type Unwrap, whenNot, asyncPipe, type MaybePromise } from "@scripts/common";
import { type EitherLeft } from "../left";
import { type EitherRight } from "./create";
import * as DObject from "../../object";
import * as DGenerator from "../../generator";
import * as DEither from "..";

type Either = MaybePromise<EitherRight | EitherLeft>;

type ComputeResult<
	GenericGroup extends Record<string, MayBeGetter<Either>>,
> = Promise<
	| DEither.EitherSuccess<
		SimplifyTopLevel<{
			[Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction
				? Unwrap<
					Extract<
						Awaited<ReturnType<GenericGroup[Prop]>>,
						EitherRight
					>
				>
				: Unwrap<
					Extract<
						Awaited<GenericGroup[Prop]>,
						EitherRight
					>
				>
		}>
	>
	| {
		[Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction
			? Extract<
				Awaited<ReturnType<GenericGroup[Prop]>>,
				EitherLeft
			>
			: Extract<
				Awaited<GenericGroup[Prop]>,
				EitherLeft
			>
	}[keyof GenericGroup]
>;

/**
 * {@include either/asyncGroup/index.md}
 */
export function asyncGroup<
	GenericGroup extends Record<string, MayBeGetter<Either>>,
>(
	group: GenericGroup,
) {
	return asyncPipe(
		group,
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
		ComputeResult<GenericGroup>,
		any
	>;
}
