/**
 * The pipeCall() function returns the same function it receives. It is used to adapt a function to a pipe-friendly shape without changing behavior.
 * 
 * **Supported call styles:**
 * - Direct: `pipeCall(theFunction)` -> returns the same function
 * 
 * The input function is not mutated.
 * 
 */
export declare function pipeCall<GenericInput extends unknown, GenericOutput extends unknown>(theFunction: (input: NoInfer<GenericInput>) => GenericOutput): (input: GenericInput) => NoInfer<GenericOutput>;
