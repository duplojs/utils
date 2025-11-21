import { DArray } from "@duplojs/utils";

const fallbacks = [undefined, null, "value", "backup"] as const;

const result = DArray.coalescing(fallbacks);
// result: "value"

const pureNullish = [undefined, null] as const;

const result2 = DArray.coalescing(pureNullish);
// result2: undefined
