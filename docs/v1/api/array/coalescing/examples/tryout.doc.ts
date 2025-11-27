import { A } from "@duplojs/utils";

const fallbacks = [undefined, null, "value", "backup"] as const;

const result = A.coalescing(fallbacks);
// result: "value"

const pureNullish = [undefined, null] as const;

const result2 = A.coalescing(pureNullish);
// result2: undefined
