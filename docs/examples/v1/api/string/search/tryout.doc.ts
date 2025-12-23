import { S } from "@duplojs/utils";

const input = "DuploJS Utils";
const result = S.search(input, "JS");
// result: 5
const result2 = S.search(input, "js");
// result2: undefined
