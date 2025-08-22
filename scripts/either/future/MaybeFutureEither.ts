import { type AnyValue } from "@scripts/common/types/anyValue";
import { type FutureEither } from "./create";

export type MaybeFutureEither<
	GenericValue extends AnyValue,
> = FutureEither<GenericValue> | GenericValue;
