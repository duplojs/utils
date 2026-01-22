import * as DString from "@scripts/string";

const isRelativeRegex = /(^|\/)\.\.(?=\/|$)/;

/**
 * {@include common/path/isAbsolute/index.md}
 */
export function isAbsolute<
	GenericPath extends string,
>(
	path: GenericPath,
): boolean {
	return DString.startsWith(path, "/")
		&& !DString.test(path, isRelativeRegex);
}
