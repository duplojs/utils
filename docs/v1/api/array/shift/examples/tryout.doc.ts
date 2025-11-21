import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = DArray.shift(input);
// result: ["inProgress", "done"]

const result2 = DArray.shift(result);
// result2: ["done"]
