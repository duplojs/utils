import { pipe } from "../../pipe";
import * as DString from "@scripts/string";

const driveLetterRegex = /^[A-Za-z]:$/;

export function normalizeWindowsPath<
	GenericPath extends string,
>(path: GenericPath): string {
	return pipe(
		path,
		DString.replace(/\\/g, "/"),
		DString.replace(
			driveLetterRegex,
			({ matchedValue }) => DString.toUpperCase(matchedValue),
		),
	);
}
