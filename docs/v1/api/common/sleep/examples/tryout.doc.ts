import { sleep } from "@duplojs/utils";

const start = Date.now();

await sleep(5);

const elapsed = Date.now() - start;
// elapsed >= 5 (approx)
