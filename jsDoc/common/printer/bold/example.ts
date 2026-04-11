import { Printer } from "@scripts";

const title = Printer.bold("Build report");
// title: "\x1b[1mBuild report\x1b[0m"

const symbol = Printer.bold("!");
// symbol: "\x1b[1m!\x1b[0m"

const empty = Printer.bold("");
// empty: "\x1b[1m\x1b[0m"
