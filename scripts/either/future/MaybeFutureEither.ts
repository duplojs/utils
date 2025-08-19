import { type FutureEither } from "./create";

export type MaybeFutureEither<
	GenericValue extends unknown,
> = FutureEither<GenericValue> | GenericValue;
