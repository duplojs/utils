export declare namespace Printer {
    const codeColors: {
        readonly red: "\u001B[31m";
        readonly green: "\u001B[32m";
        readonly yellow: "\u001B[33m";
        readonly blue: "\u001B[34m";
        readonly magenta: "\u001B[35m";
        readonly cyan: "\u001B[36m";
        readonly gray: "\u001B[90m";
    };
    export const tab = "\t";
    export const back = "\n";
    export const dash = "-";
    export type Colors = keyof typeof codeColors;
    /**
     * Wraps a string with the ANSI escape sequence of the selected color. Exists in immediate or curried form.
     * 
     * **Supported call styles:**
     * - Classic: `Printer.colorized(input, color)` -> returns the colored string
     * - Curried: `Printer.colorized(color)` -> returns a function waiting for the string
     * 
     * The function only adds the opening color code and the reset code around the input string.
     * 
     * ```ts
     * const directResult = Printer.colorized("Hello", "green");
     * // directResult: "\x1b[32mHello\x1b[0m"
     * 
     * const pipedResult = pipe(
     * 	"Warning",
     * 	Printer.colorized("yellow"),
     * );
     * // pipedResult: "\x1b[33mWarning\x1b[0m"
     * 
     * const errorResult = Printer.colorized("Error", "red");
     * // errorResult: "\x1b[31mError\x1b[0m"
     * 
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/common/printer/colorized
     * 
     */
    export function colorized<GenericInput extends string>(color: Colors): (input: GenericInput) => string;
    export function colorized<GenericInput extends string>(input: GenericInput, color: Colors): string;
    /**
     * Wraps a string with the ANSI escape sequence for bold text.
     * 
     * Signature: `Printer.bold(input)` -> returns the bold string
     * 
     * The function prepends the bold code and appends the reset code without altering the input content.
     * 
     * ```ts
     * const title = Printer.bold("Build report");
     * // title: "\x1b[1mBuild report\x1b[0m"
     * 
     * const symbol = Printer.bold("!");
     * // symbol: "\x1b[1m!\x1b[0m"
     * 
     * const empty = Printer.bold("");
     * // empty: "\x1b[1m\x1b[0m"
     * 
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/common/printer/bold
     * 
     */
    export function bold(input: string): string;
    /**
     * Applies a color and bold formatting to a string by combining `Printer.colorized()` and `Printer.bold()`. Exists in immediate or curried form.
     * 
     * **Supported call styles:**
     * - Classic: `Printer.colorizedBold(input, color)` -> returns the formatted string
     * - Curried: `Printer.colorizedBold(color)` -> returns a function waiting for the string
     * 
     * The produced string contains the bold ANSI code, then the colorized content, and finally the reset codes.
     * 
     * ```ts
     * const directResult = Printer.colorizedBold("Fatal", "red");
     * // directResult: "\x1b[1m\x1b[31mFatal\x1b[0m\x1b[0m"
     * 
     * const pipedResult = pipe(
     * 	"Info",
     * 	Printer.colorizedBold("cyan"),
     * );
     * // pipedResult: "\x1b[1m\x1b[36mInfo\x1b[0m\x1b[0m"
     * 
     * const successResult = Printer.colorizedBold("Done", "green");
     * // successResult: "\x1b[1m\x1b[32mDone\x1b[0m\x1b[0m"
     * 
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/common/printer/colorizedBold
     * 
     */
    export function colorizedBold<GenericInput extends string>(color: Colors): (input: GenericInput) => string;
    export function colorizedBold<GenericInput extends string>(input: GenericInput, color: Colors): string;
    export function indent(level: number): string;
    export function stringify(value: unknown): string;
    export type RenderInput = string | boolean | null | undefined | RenderInput[];
    /**
     * Flattens printable values, keeps strings and `true`, then joins the result with a custom separator. Exists in immediate or curried form.
     * 
     * **Supported call styles:**
     * - Classic: `Printer.render(values, joinCharacter)` -> returns the rendered string
     * - Curried: `Printer.render(joinCharacter)` -> returns a function waiting for the values array
     * 
     * Nested arrays are flattened recursively. `false`, `null`, and `undefined` are ignored, while `true` is kept as the string `"true"`.
     * The namespace also exposes two ready-to-use defaults: `Printer.renderLine`, which joins with a space, and `Printer.renderParagraph`, which joins with `Printer.back`.
     * 
     * ```ts
     * const customResult = Printer.render(
     * 	["alpha", ["beta", false], true, undefined],
     * 	" | ",
     * );
     * // customResult: "alpha | beta | true"
     * 
     * const lineResult = Printer.renderLine([
     * 	"hello",
     * 	["world", null],
     * 	true,
     * ]);
     * // lineResult: "hello world true"
     * 
     * const paragraphResult = pipe(
     * 	["title", ["", "body"], false, true] as const,
     * 	Printer.renderParagraph,
     * );
     * // paragraphResult: "title\n\nbody\ntrue"
     * 
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/common/printer/render
     * 
     */
    export function render<GenericValues extends readonly RenderInput[]>(joinCharacter: string): (values: GenericValues) => string;
    export function render<GenericValues extends readonly RenderInput[]>(values: GenericValues, joinCharacter: string): string;
    export const renderLine: (values: readonly RenderInput[]) => string;
    export const renderParagraph: (values: readonly RenderInput[]) => string;
    export {};
}
