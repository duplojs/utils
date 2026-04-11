import { pipe, Printer } from "@scripts";

const directResult = Printer.colorizedBold("Fatal", "red");
// directResult: "\x1b[1m\x1b[31mFatal\x1b[0m\x1b[0m"

const pipedResult = pipe(
	"Info",
	Printer.colorizedBold("cyan"),
);
// pipedResult: "\x1b[1m\x1b[36mInfo\x1b[0m\x1b[0m"

const successResult = Printer.colorizedBold("Done", "green");
// successResult: "\x1b[1m\x1b[32mDone\x1b[0m\x1b[0m"
