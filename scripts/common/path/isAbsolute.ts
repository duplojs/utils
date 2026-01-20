import * as DString from "@scripts/string";
import type { IsStringLiteral } from "../types";

const isAbsoluteRegex = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;

type ComputeResult<GenericPath extends string> =
	IsStringLiteral<GenericPath> extends false
		? GenericPath
		: Extract<
			GenericPath,
			`/${string}` | `\\${string}` | `${string}:${"/" | "\\"}${string}`
		>;

export function isAbsolute<
	GenericPath extends string,
>(
	path: GenericPath,
): path is ComputeResult<GenericPath> {
	return DString.test(path, isAbsoluteRegex);
}
