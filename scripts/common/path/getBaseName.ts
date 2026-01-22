import * as DString from "@scripts/string";
import * as DArray from "@scripts/array";

interface GetBaseNameParams {
	extension?: string;
}

/**
 * {@include common/path/getBaseName/index.md}
 */
export function getBaseName<
	GenericPath extends string,
>(
	path: GenericPath,
	params?: GetBaseNameParams,
): string | null {
	const segments = DString.split(path, "/");

	const lastSegment = DArray.findLast(
		segments,
		(value) => DString.length(value) > 0,
	) ?? null;

	if (!lastSegment || lastSegment === "..") {
		return null;
	}

	if (params?.extension && DString.endsWith(lastSegment, params?.extension)) {
		const extensionLength = DString.length(params.extension);

		return DString.slice(lastSegment, 0, -extensionLength);
	}

	return lastSegment;
}
