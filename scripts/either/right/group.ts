import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, pipe, when, isType, type Unwrap, whenNot } from "@scripts/common";
import { type Left } from "../left";
import { type Right } from "./create";
import * as DObject from "../../object";
import * as DArray from "../../array";
import * as DEither from "..";

type Either = Right | Left;

type ComputeResult<
	GenericGroup extends (
		| Record<string, MayBeGetter<Either>>
		| readonly MayBeGetter<Either>[]
	),
> = (
	| DEither.Success<
		SimplifyTopLevel<{
			-readonly [Prop in keyof GenericGroup]: GenericGroup[Prop] extends infer InferredValue
				? InferredValue extends AnyFunction
					? Unwrap<
						Extract<
							ReturnType<InferredValue>,
							Right
						>
					>
					: Unwrap<
						Extract<
							InferredValue,
							Right
						>
					>
				: never
		}>
	>
	| (
		GenericGroup extends readonly (infer InferredElement)[]
			? InferredElement extends AnyFunction
				? Extract<
					ReturnType<InferredElement>,
					Left
				>
				: Extract<
					InferredElement,
					Left
				>
			: {
				[Prop in Exclude<keyof GenericGroup, keyof any[]>]: GenericGroup[Prop] extends AnyFunction
					? Extract<
						ReturnType<GenericGroup[Prop]>,
						Left
					>
					: Extract<
						GenericGroup[Prop],
						Left
					>
			}[Exclude<keyof GenericGroup, keyof any[]>]
	)
);

/**
 * {@include either/group/index.md}
 */
export function group<
	const GenericGroup extends(
		| Record<string, MayBeGetter<Either>>
		| readonly MayBeGetter<Either>[]
	),
>(
	group: GenericGroup,
): Extract<
		ComputeResult<GenericGroup>,
		any
	> {
	if (group instanceof Array) {
		return pipe(
			group as readonly MayBeGetter<Either>[],
			DArray.reduce(
				DArray.reduceFrom<unknown[]>([]),
				({ element, lastValue, nextPush, exit }) => pipe(
					element,
					when(
						isType("function"),
						(getter) => getter(),
					),
					when(
						DEither.isLeft,
						exit,
					),
					DEither.whenIsRight(
						(data) => nextPush(
							lastValue,
							data,
						),
					),
				),
			),
			whenNot(
				DEither.isLeft,
				DEither.success,
			),
		) as never;
	}

	return pipe(
		group as Record<string, MayBeGetter<Either>>,
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
	) as never;
}
