/**
 * The toCurriedPredicate() function returns the same predicate it receives. It exists to force type inference when a single-argument predicate is passed to a pipe and inference can go wrong.
 * 
 * **Supported call styles:**
 * - Direct: `toCurriedPredicate(thePredicate)` -> returns the same predicate
 * 
 * The input predicate is not mutated.
 * 
 */
export declare function toCurriedPredicate<GenericInput extends unknown, GenericPredicate extends GenericInput>(thePredicate: (input: GenericInput) => input is GenericPredicate): (input: GenericInput) => input is GenericPredicate;
