'use strict';

var repeat = require('../string/repeat.cjs');

exports.Printer = void 0;
(function (Printer) {
    const codeColors = {
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        gray: "\x1b[90m",
    };
    const codeBold = "\x1b[1m";
    const codeReset = "\x1b[0m";
    Printer.tab = "\t";
    Printer.back = "\n";
    Printer.dash = "-";
    function colorized(...args) {
        if (args.length === 1) {
            const [color] = args;
            return (input) => colorized(input, color);
        }
        const [input, color] = args;
        return `${codeColors[color]}${input}${codeReset}`;
    }
    Printer.colorized = colorized;
    /**
     * {@include common/printer/bold/index.md}
     */
    function bold(input) {
        return `${codeBold}${input}${codeReset}`;
    }
    Printer.bold = bold;
    function colorizedBold(...args) {
        if (args.length === 1) {
            const [color] = args;
            return (input) => colorizedBold(input, color);
        }
        const [input, color] = args;
        return bold(colorized(input, color));
    }
    Printer.colorizedBold = colorizedBold;
    function indent(level) {
        return repeat.repeat(Printer.tab, level);
    }
    Printer.indent = indent;
    function stringify(value) {
        try {
            return JSON.stringify(value);
        }
        catch {
            return String(value);
        }
    }
    Printer.stringify = stringify;
    function render(...args) {
        if (args.length === 1) {
            const [joinCharacter] = args;
            return (values) => render(values, joinCharacter);
        }
        const [values, joinCharacter] = args;
        return values
            .flat(Infinity)
            .filter((value) => typeof value === "string" || value === true)
            .join(joinCharacter);
    }
    Printer.render = render;
    Printer.renderLine = render(" ");
    Printer.renderParagraph = render(Printer.back);
})(exports.Printer || (exports.Printer = {}));
