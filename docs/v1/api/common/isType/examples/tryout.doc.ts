import { isType } from "@duplojs/utils";

type Value = string | number | string[] | null;

const isStringArray = isType<Value>("array");
const isNumber = isType<Value>("number");

const values: Value[] = ["hello", 42, ["a", "b"], null];

const onlyNumbers = values.filter(isNumber);
// onlyNumbers: number[]

const onlyArrays = values.filter(isStringArray);
// onlyArrays: string[][]
