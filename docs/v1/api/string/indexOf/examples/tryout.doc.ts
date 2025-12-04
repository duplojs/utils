import { S } from "@duplojs/utils";

const input = "DuploJS Utils";
const result = S.indexOf(input, "JS");
// result: 5
const result2 = S.indexOf(input, "JS", 6);
// result2: undefined
