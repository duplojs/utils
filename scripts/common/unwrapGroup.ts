import { type SimplifyTopLevel } from "./types";
import { type Unwrap, unwrap } from "./unwrap";

type ComputeResult<
	GenericGroup extends Record<string, unknown>,
> = SimplifyTopLevel<{
	[Prop in keyof GenericGroup]: Unwrap<GenericGroup[Prop]>
}>;

/**
 * {@include common/unwrapGroup/index.md}
 */
export function unwrapGroup<
	const GenericGroup extends Record<string, unknown>,
>(
	group: GenericGroup,
): ComputeResult<GenericGroup> {
	const result: Record<string, unknown> = {};

	for (const key in group) {
		result[key] = unwrap(group[key]);
	}

	return result as never;
}
