import { type Future } from "./create";

export type MaybeFutureEither<
	GenericValue extends unknown,
> = Future<GenericValue> | GenericValue;
