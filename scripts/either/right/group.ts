import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, pipe, when, isType, type Unwrap, whenNot } from "@scripts/common";
import { type Left } from "../left";
import { type Right } from "./create";
import * as DObject from "../../object";
import * as DArray from "../../array";
import * as DEither from "..";

type Either = Right | Left;

type ComputeResult<
	GenericGroup extends Record<string, MayBeGetter<Either>>,
> = (
	| DEither.Success<
		SimplifyTopLevel<{
			[Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction
				? Unwrap<
					Extract<
						ReturnType<GenericGroup[Prop]>,
						Right
					>
				>
				: Unwrap<
					Extract<
						GenericGroup[Prop],
						Right
					>
				>
		}>
	>
	| {
		[Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction
			? Extract<
				ReturnType<GenericGroup[Prop]>,
				Left
			>
			: Extract<
				GenericGroup[Prop],
				Left
			>
	}[keyof GenericGroup]
);

/**
 * {@include either/group/index.md}
 */
export function group<
	GenericGroup extends Record<string, MayBeGetter<Either>>,
>(
	group: GenericGroup,
) {
	return pipe(
		group,
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
		ComputeResult<GenericGroup>,
		any
	>;
}
