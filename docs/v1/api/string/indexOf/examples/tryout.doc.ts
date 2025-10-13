import { DString } from "@duplojs/utils";

const input = "DuploJS Utils";
const result = DString.indexOf(input, "JS");
// result: 5
const result2 = DString.indexOf(input, "JS", 6);
// result2: undefined
