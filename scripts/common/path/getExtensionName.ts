import * as DArray from "@scripts/array";

const extensionNameRegex = /\.([^./]+)$/;

/**
 * {@include common/path/getExtensionName/index.md}
 */
export function getExtensionName<
	GenericPath extends string,
>(path: GenericPath): string | null {
	const match = extensionNameRegex.exec(path);

	if (!!match && DArray.minElements(match, 2)) {
		return match[1];
	}

	return null;
}
