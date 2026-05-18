import { type Right } from "./right";
import { type Left } from "./left";

type Either = Right | Left;

/**
 * {@include either/expect/index.md}
 */
export function expect<
	GenericEither extends Either,
>(input: GenericEither): GenericEither {
	return input;
}
