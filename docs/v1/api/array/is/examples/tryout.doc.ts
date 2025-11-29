import { A } from "@duplojs/utils";

const value1 = [1, 2, 3];
const result1 = A.is(value1);
// result1: true

const value2 = "hello";
const result2 = A.is(value2);
// result2: false

const value3 = {
	0: "a",
	1: "b",
	length: 2,
};
const result3 = A.is(value3);
// result3: false
