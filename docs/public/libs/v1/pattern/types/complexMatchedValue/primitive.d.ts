import { type IsEqual } from "../../../common";
import { type EligiblePrimitiveMatch } from "../pattern";
export type ComplexMatchedPrimitive<GenericInput extends unknown, GenericPatternValue extends unknown> = ([
    Extract<GenericInput, EligiblePrimitiveMatch>,
    Extract<GenericPatternValue, EligiblePrimitiveMatch>
] extends [
    infer inferredInput extends EligiblePrimitiveMatch,
    infer inferredPatternValue extends EligiblePrimitiveMatch
] ? Extract<inferredInput, inferredPatternValue> extends infer inferredValue ? IsEqual<inferredValue, never> extends true ? inferredPatternValue : inferredValue : never : never);
