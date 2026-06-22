import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, when, isType, type Unwrap, whenNot, asyncPipe, type MaybePromise } from "@scripts/common";
import { type Left } from "../left";
import { type Right } from "./create";
import * as DObject from "../../object";
import * as DGenerator from "../../generator";
import * as DEither from "..";

type Either = MaybePromise<Right | Left>;

type ComputeResult<
	GenericGroup extends (
		| Record<string, MayBeGetter<Either>>
		| readonly MayBeGetter<Either>[]
	),
> = Extract<
	Promise<
		| DEither.Success<
			SimplifyTopLevel<{
				-readonly [Prop in keyof GenericGroup]: GenericGroup[Prop] extends infer InferredValue
					? InferredValue extends AnyFunction
						? Unwrap<
							Extract<
								Awaited<ReturnType<InferredValue>>,
								Right
							>
						>
						: Unwrap<
							Extract<
								Awaited<InferredValue>,
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
						Awaited<ReturnType<InferredElement>>,
						Left
					>
					: Extract<
						Awaited<InferredElement>,
						Left
					>
				: {
					[Prop in Exclude<keyof GenericGroup, keyof any[]>]: GenericGroup[Prop] extends AnyFunction
						? Extract<
							Awaited<ReturnType<GenericGroup[Prop]>>,
							Left
						>
						: Extract<
							Awaited<GenericGroup[Prop]>,
							Left
						>
				}[Exclude<keyof GenericGroup, keyof any[]>]
		)
	>,
	any
>;

/**
 * {@include either/asyncGroup/index.md}
 */
export function asyncGroup<
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
		return asyncPipe(
			group as readonly MayBeGetter<Either>[],
			DGenerator.asyncReduce(
				DGenerator.reduceFrom<unknown[]>([]),
				({ element, lastValue, nextPush, exit }) => asyncPipe(
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

	return asyncPipe(
		group as Record<string, MayBeGetter<Either>>,
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
	) as never;
}
