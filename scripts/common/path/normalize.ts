import * as DString from "@scripts/string";
import { isAbsolute } from "./isAbsolute";
import { normalizeWindowsPath } from "./utils/normalizeWindowsPath";
import { normalizeString } from "./utils/normalizeString";

const driveLetterRegex = /^[A-Za-z]:$/;

export function normalize<
	GenericPath extends string,
>(path: GenericPath): string {
	if (DString.length(path) === 0) {
		return ".";
	}

	const localPath = normalizeWindowsPath(path);

	const isPathAbsolute = isAbsolute(localPath);
	const trailingSeparator = DString.endsWith(localPath, "/");

	let normalizedPath = normalizeString(localPath, { allowAboveRoot: !isPathAbsolute });

	if (DString.length(normalizedPath) === 0) {
		if (isPathAbsolute) {
			return "/";
		}
		return trailingSeparator ? "./" : ".";
	}

	if (trailingSeparator) {
		normalizedPath = DString.concat(normalizedPath, "/");
	}

	if (driveLetterRegex.test(normalizedPath)) {
		normalizedPath = DString.concat(normalizedPath, "/");
	}

	if (DString.test(localPath, /^[/\\]{2}/)) {
		if (!isPathAbsolute) {
			return `//./${normalizedPath}`;
		}
		return `//${normalizedPath}`;
	}

	const isPathNormalizedAbsolute = isAbsolute(normalizedPath);

	return isPathAbsolute && !isPathNormalizedAbsolute
		? `/${normalizedPath}`
		: normalizedPath;
}
