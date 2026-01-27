import { isAbsolute } from "./isAbsolute";
import * as DEither from "@scripts/either";
import { resolveRelative } from "./resolveRelative";
import type { AnyTuple } from "../types";

/**
 * {@include common/path/resolveFrom/index.md}
 */
export function resolveFrom<
	GenericSegment extends string,
>(
	origin: string,
	segments: AnyTuple<GenericSegment>,
): DEither.Fail | DEither.Success<string> {
	const result = resolveRelative([origin, ...segments]);

	return isAbsolute(result)
		? DEither.success(result)
		: DEither.fail();
}
