import * as DArray from "@scripts/array";

const extensionNameRegex = /.(\.[^./]+|\.)$/;

/**
 * {@include common/path/getExtensionName/index.md}
 */
export function getExtensionName<
	GenericPath extends string,
>(path: GenericPath): string | null {
	if (path === "..") {
		return null;
	}

	const match = extensionNameRegex.exec(path);

	if (!!match && DArray.minElements(match, 2)) {
		if (match[1] === ".") {
			return null;
		}

		return match[1];
	}

	return null;
}
