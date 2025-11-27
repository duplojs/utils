import { O } from "@duplojs/utils";

const input = [["name", "Alice"], ["age", 30]] as const;
const result = O.fromEntries(input);
// result: { name: "Alice", age: 30 }
