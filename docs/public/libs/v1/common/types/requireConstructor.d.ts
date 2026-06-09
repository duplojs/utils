import { type AnyAbstractConstructor } from "./anyConstructor";
import { type ComputedTypeError } from "./ComputedTypeError";
export type RequireConstructor<GenericInput extends unknown, GenericConstructor extends AnyAbstractConstructor = AnyAbstractConstructor> = GenericInput extends GenericConstructor ? GenericInput : ComputedTypeError<"Require constructor.">;
