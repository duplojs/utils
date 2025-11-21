import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress", "review", "done"] as const;

const result = DArray.spliceDelete(input, 1, 2);
// result: ["todo", "done"]
