import { normalizeWindowsPath } from "./utils/normalizeWindowsPath";
import { pipe } from "../pipe";
import * as DString from "@scripts/string";
import * as DArray from "@scripts/array";
import { isAbsolute } from "path";

const driveLetterRegex = /^[A-Za-z]:$/;

export function getParentFolderPath<
	GenericPath extends string,
>(path: GenericPath): string {
	const segments = pipe(
		path,
		normalizeWindowsPath,
		DString.replace(/\/$/, ""),
		DString.split("/"),
		DArray.slice(0, -1),
	);

	if (
		DArray.minElements(segments, 1)
		&& DString.test(segments[0], driveLetterRegex)
	) {
		segments[0] += "/";
	}

	return DArray.join(segments, "/")
		|| (isAbsolute(path)
			? "/"
			: "."
		);
}
