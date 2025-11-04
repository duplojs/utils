import { DArray } from "@duplojs/utils";

const value1 = [1, 2, 3];
const result1 = DArray.is(value1);
// result1: true

const value2 = "hello";
const result2 = DArray.is(value2);
// result2: false

const value3 = {
	0: "a",
	1: "b",
	length: 2,
};
const result3 = DArray.is(value3);
// result3: false
