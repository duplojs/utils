import { type Kind, type WrappedValue, type AnyValue, type Unwrap, type BreakGenericLink } from "../common";
import { type EitherRight } from "./right";
import { type EitherLeft } from "./left";
import { eitherInformationKind } from "./kind";
type Either = EitherRight | EitherLeft;
/**
 * Functional pattern matching based on the literal information of an Either. The function is executed only when the information (or one of the informations) matches.
 * 
 * **Supported call styles:**
 * - Classic: `whenHasInformation(input, information, theFunction)` → returns a value
 * - Curried: `whenHasInformation(information, theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * const input = true
 * 	? false
 * 		? E.right("right-1", 1)
 * 		: E.left("left-2", 2)
 * 	: E.left("left-3", 3);
 * 
 * const result = pipe(
 * 	input,
 * 	E.whenHasInformation("right-1", (value) => {
 * 		// type: 1
 * 		return value;
 * 	}),
 * 	E.whenHasInformation("left-2", (value) => {
 * 		// type: 2
 * 		return value;
 * 	}),
 * );
 * 
 * // type: 1 | 2 | E.EitherLeft<"left-3", 3>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenHasInformation
 * 
 * @namespace E
 * 
 */
export declare function whenHasInformation<const GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof eitherInformationKind.getValue<GenericInput>> : never), const GenericOutput extends AnyValue>(information: GenericInformation | GenericInformation[], theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<BreakGenericLink<GenericInput>, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
export declare function whenHasInformation<const GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof eitherInformationKind.getValue<GenericInput>> : never), const GenericOutput extends AnyValue>(input: GenericInput, information: GenericInformation | GenericInformation[], theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue>>) => GenericOutput): GenericOutput | Exclude<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
export {};
