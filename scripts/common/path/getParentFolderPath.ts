import { pipe } from "../pipe";
import * as DString from "@scripts/string";
import * as DArray from "@scripts/array";
import { isAbsolute } from "./isAbsolute";

/**
 * {@include common/path/getParentFolderPath/index.md}
 */
export function getParentFolderPath<
	GenericPath extends string,
>(path: GenericPath): string {
	const segments = pipe(
		path,
		DString.replace(/\/$/, ""),
		DString.split("/"),
		DArray.slice(0, -1),
	);

	return DArray.join(segments, "/")
		|| (isAbsolute(path)
			? "/"
			: "."
		);
}
