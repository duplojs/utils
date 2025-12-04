import { S } from "@duplojs/utils";

const input = "DuploJS Utils";
const result = S.lastIndexOf(input, "JS");
// result: 5
const result2 = S.lastIndexOf(input, "JS", 5);
// result2: undefined
