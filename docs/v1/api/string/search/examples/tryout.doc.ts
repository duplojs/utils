import { DString } from "@duplojs/utils";

const input = "DuploJS Utils";
const result = DString.search(input, "JS");
// result: 5
const result2 = DString.search(input, "js");
// result2: undefined
