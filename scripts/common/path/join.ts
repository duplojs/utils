import * as DString from "@scripts/string";
import { normalize } from "./normalize";

export function join<
	GenericSegment extends string,
>(...segments: readonly GenericSegment[]): string {
	let path = "";

	for (const segment of segments) {
		const segmentLength = DString.length(segment);

		if (segmentLength === 0) {
			continue;
		}

		if (DString.length(path) === 0) {
			path = segment;
			continue;
		}

		const pathTrailing = DString.endsWith(path, "/");
		const segmentLeading = DString.startsWith(segment, "/");

		if (pathTrailing && segmentLeading) {
			path = DString.concat(
				path,
				DString.slice(segment, 1, segmentLength),
			);
		} else if (pathTrailing || segmentLeading) {
			path = DString.concat(path, segment);
		} else {
			path = DString.concat(path, "/", segment);
		}
	}

	return normalize(path);
}
