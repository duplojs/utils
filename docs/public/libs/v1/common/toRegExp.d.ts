import type { AnyTuple } from "./types";
/**
 * The toRegExp() function normalizes a value into a regular expression. Strings and string tuple are escaped and converted to exact-match regex patterns.
 * 
 * Supported call style:
 * - Classic: `toRegExp(input)` → returns a value
 * 
 * Behavior:
 * - `string` input becomes an exact regex (`^...import type { AnyTuple } from "./types";
/**
)
 * - `AnyTuple<string>` input becomes an exact alternation regex (`^(?:...|...)import type { AnyTuple } from "./types";
/**
)
 * - `RegExp` input is returned as-is
 * 
 * ```ts
 * const fromString = toRegExp("a.c");
 * // matches only the literal "a.c"
 * 
 * const fromList = toRegExp([
 * 	"jpg",
 * 	"png",
 * ]);
 * // matches "jpg" or "png"
 * 
 * const existing = /hello/i;
 * const sameInstance = toRegExp(existing);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/toRegExp
 * 
 */
export declare function toRegExp(input: string | AnyTuple<string> | RegExp): RegExp;
