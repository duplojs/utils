import { DDate } from "@duplojs/utils";

const input = 1_700_000_000_000;
const result = DDate.isSafeTimestamp(input);
// result: true

const input2 = 9_000_000_000_000_000;
const result2 = DDate.isSafeTimestamp(input2);
// result2: false
