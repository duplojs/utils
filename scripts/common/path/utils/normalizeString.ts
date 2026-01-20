import * as DArray from "@scripts/array";
import * as DString from "@scripts/string";

export interface normalizeStringParams {
	allowAboveRoot?: boolean;
}

export function normalizeString<
	GenericPath extends string,
>(
	path: GenericPath,
	params: normalizeStringParams,
): string {
	const segments = DString.split(path, "/");

	const normalizedSegments = DArray.reduce(
		segments,
		DArray.reduceFrom<string[]>([]),
		({ element, lastValue, next, nextPush }) => {
			if (DString.length(element) === 0 || element === ".") {
				return next(lastValue);
			}

			if (element === "..") {
				const lastIndex = DArray.length(lastValue) - 1;
				const lastSegment = lastIndex >= 0 ? lastValue[lastIndex] : "";

				if (lastIndex >= 0 && lastSegment !== "..") {
					return next(DArray.pop(lastValue));
				}

				if (params?.allowAboveRoot) {
					return nextPush(lastValue, "..");
				}

				return next(lastValue);
			}

			return nextPush(lastValue, element);
		},
	);

	return DArray.join(normalizedSegments, "/");
}
