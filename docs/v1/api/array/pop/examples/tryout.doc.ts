import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = DArray.pop(input);
// result: ["todo", "inProgress"]

const result2 = DArray.pop(result);
// result2: ["todo"]
