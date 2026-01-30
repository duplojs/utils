import { memoPromise } from "@scripts";

const memoizedValue = memoPromise(() => "ready");
const first = await memoizedValue.value;
// "ready"

const memoizedPromise = memoPromise(() => Promise.resolve("ok"));
const okValue = await memoizedPromise.value;
// "ok"
