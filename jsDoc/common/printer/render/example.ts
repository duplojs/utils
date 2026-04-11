import { pipe, Printer } from "@scripts";

const customResult = Printer.render(
	["alpha", ["beta", false], true, undefined],
	" | ",
);
// customResult: "alpha | beta | true"

const lineResult = Printer.renderLine([
	"hello",
	["world", null],
	true,
]);
// lineResult: "hello world true"

const paragraphResult = pipe(
	["title", ["", "body"], false, true] as const,
	Printer.renderParagraph,
);
// paragraphResult: "title\n\nbody\ntrue"
