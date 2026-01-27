import { type Kind } from "../common";
import { type Left } from "./left";
import { type Right } from "./right";
import { informationKind } from "./kind";
type Either = Right | Left;
/**
 * Type guard based on the literal information stored in the Either. Lets you precisely target a business case without extra introspection.
 * 
 * **Supported call styles:**
 * - Classic predicate: `hasInformation(input, information)` → narrows the input type
 * - Curried predicate: `hasInformation(information)` → narrows the input type
 * 
 * Acts as a type guard and returns "true" when the match succeeds.
 * 
 * ```ts
 * const result = true
 * 	? false
 * 		? E.right("right-1", 1)
 * 		: E.left("left-2", 2)
 * 	: E.left("left-3", 3);
 * 
 * if (E.isLeft(result)) {
 * 	// type: E.Left<"left-2", 2> | E.Left<"left-3", 3>
 * 
 * 	if (E.hasInformation(result, "left-2")) {
 * 		// type: E.Left<"left-2", 2>
 * 	}
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/hasInformation
 * 
 * @namespace E
 * 
 */
export declare function hasInformation<const GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(information: GenericInformation): (input: GenericInput) => input is Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>;
export declare function hasInformation<const GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(input: GenericInput, information: GenericInformation): input is Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>;
export {};
