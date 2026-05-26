import { type Kind } from "../common";
import { type Left } from "./left";
import { type Right } from "./right";
import { informationKind } from "./kind";
type Either = Right | Left;
/**
 * Type guard based on the literal information stored in the Either. Accepts one information or an array of informations to target multiple business cases without extra introspection.
 * 
 * **Supported call styles:**
 * - Classic predicate: `hasInformation(input, information)` where `information` can be a string or an array of strings
 * - Curried predicate: `hasInformation(information)` where `information` can be a string or an array of strings
 * 
 * Acts as a type guard and returns "true" when the Either information matches one of the provided informations.
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
 * 
 * 	if (E.hasInformation(result, ["left-2", "left-3"])) {
 * 		// type: E.Left<"left-2", 2> | E.Left<"left-3", 3>
 * 	}
 * }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/hasInformation
 * 
 * @namespace E
 * 
 */
export declare function hasInformation<const GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(information: GenericInformation | GenericInformation[]): (input: GenericInput) => input is Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>;
export declare function hasInformation<const GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(input: GenericInput, information: GenericInformation | GenericInformation[]): input is Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>;
export {};
