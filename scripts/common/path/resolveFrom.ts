import * as DArray from "@scripts/array";
import * as DString from "@scripts/string";
import { isAbsolute } from "./isAbsolute";
import { normalizeString } from "./utils/normalizeString";
import { normalizeWindowsPath } from "./utils/normalizeWindowsPath";

export function resolveFrom<
	GenericPaths extends readonly string[],
>(
	origin: string
): (paths: GenericPaths) => string;

export function resolveFrom<
	GenericPaths extends readonly string[],
>(
	paths: GenericPaths,
	origin: string,
): string;

export function resolveFrom(...args: [string] | [readonly string[], string]) {
	if (args.length === 1) {
		const [origin] = args;

		return (paths: readonly string[]) => resolveFrom(paths, origin);
	}

	const [paths, origin] = args;

	const localPaths = DArray.map(paths, normalizeWindowsPath);
	const localOrigin = normalizeWindowsPath(origin);
	const allPaths = DArray.push(localPaths, localOrigin);

	const resolved = DArray.reduce(
		allPaths,
		DArray.reduceFrom({
			resolvedPath: "",
			resolvedAbsolute: false,
		}),
		({ element, lastValue, next, exit }) => {
			if (lastValue.resolvedAbsolute) {
				return exit(lastValue);
			}

			if (DString.length(element) === 0) {
				return next(lastValue);
			}

			return next({
				resolvedPath: DString.concat(
					element,
					"/",
					lastValue.resolvedPath,
				),
				resolvedAbsolute: isAbsolute(element),
			});
		},
	);

	const normalizedPath = normalizeString(
		resolved.resolvedPath,
		{ allowAboveRoot: !resolved.resolvedAbsolute },
	);

	if (resolved.resolvedAbsolute && !isAbsolute(normalizedPath)) {
		return DString.concat("/", normalizedPath);
	}

	return DString.length(normalizedPath) > 0 ? normalizedPath : ".";
}
