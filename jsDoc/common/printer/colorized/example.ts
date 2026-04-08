import { pipe, Printer } from "@scripts";

const directResult = Printer.colorized("Hello", "green");
// directResult: "\x1b[32mHello\x1b[0m"

const pipedResult = pipe(
	"Warning",
	Printer.colorized("yellow"),
);
// pipedResult: "\x1b[33mWarning\x1b[0m"

const errorResult = Printer.colorized("Error", "red");
// errorResult: "\x1b[31mError\x1b[0m"
