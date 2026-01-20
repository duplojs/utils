import * as DArray from "@scripts/array";
import { normalizeWindowsPath } from "./utils/normalizeWindowsPath";

const extensionNameRegex = /.(\.[^./]+|\.)$/;

export function getExtensionName<
	GenericPath extends string,
>(path: GenericPath): string {
	if (path === "..") {
		return "";
	}

	const match = extensionNameRegex.exec(
		normalizeWindowsPath(path),
	);

	if (!!match && DArray.minElements(match, 2)) {
		return match[1];
	}

	return "";
}
