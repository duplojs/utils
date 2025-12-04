import { S } from "@duplojs/utils";

const input = "foo_foo_foo";
const result = S.match(input, /f.o_/);
// result: ["foo_"]
const result2 = S.match(input, "foo");
// result2: ["foo"]
