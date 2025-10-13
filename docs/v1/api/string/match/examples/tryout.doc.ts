import { DString } from "@duplojs/utils";

const input = "foo_foo_foo";
const result = DString.match(input, /f.o_/);
// result: ["foo_"]
const result2 = DString.match(input, "foo");
// result2: ["foo"]
