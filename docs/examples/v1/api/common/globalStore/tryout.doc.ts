import { createGlobalStore, type ExpectType } from "@duplojs/utils";

declare module "@duplojs/utils" {
	interface GlobalStore {
		requestCount: number;
	}
}

const storeA = createGlobalStore("requestCount", 0);
const storeB = createGlobalStore("requestCount", 999);

type check = ExpectType<
	typeof storeA.value,
	number,
	"strict"
>;

const value1 = storeA.value;
// 0
const value2 = storeB.value;
// 0

storeB.set(storeB.value + 1);

const value3 = storeA.value;
// 1
const value4 = storeB.value;
// 1
