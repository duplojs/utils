import { pipe } from "../pipe";
import * as DString from "@scripts/string";
import { normalizeWindowsPath } from "./utils/normalizeWindowsPath";
import * as DArray from "@scripts/array";

interface GetBaseNameParams {
	extension?: string;
}

export function getBaseName<
	GenericPath extends string,
>(
	path: GenericPath,
	params?: GetBaseNameParams,
): string {
	const segments = pipe(
		path,
		normalizeWindowsPath,
		DString.split("/"),
	);

	const lastSegment = DArray.findLast(
		segments,
		(value) => DString.length(value) > 0,
	) ?? "";

	if (params?.extension && DString.endsWith(lastSegment, params?.extension)) {
		const extensionLength = DString.length(params.extension);

		return DString.slice(lastSegment, 0, -extensionLength);
	}

	return lastSegment;
}
