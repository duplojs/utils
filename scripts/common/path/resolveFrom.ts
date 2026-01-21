import { isAbsolute } from "./isAbsolute";
import * as DEither from "@scripts/either";
import { resolveRelative } from "./resolveRelative";

/**
 * {@include common/path/resolveFrom/index.md}
 */
export function resolveFrom<
	GenericPaths extends readonly string[],
>(
	origin: string
): (paths: GenericPaths) => DEither.EitherFail | DEither.EitherSuccess<string>;

export function resolveFrom<
	GenericPaths extends readonly string[],
>(
	paths: GenericPaths,
	origin: string,
): DEither.EitherFail | DEither.EitherSuccess<string>;

export function resolveFrom(...args: [string] | [readonly string[], string]) {
	if (args.length === 1) {
		const [origin] = args;

		return (paths: readonly string[]) => resolveFrom(paths, origin);
	}

	const [paths, origin] = args;

	const result = resolveRelative(origin, ...paths);

	return isAbsolute(result)
		? DEither.success(result)
		: DEither.fail();
}
