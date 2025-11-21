import { DArray } from "@duplojs/utils";

const input = ["todo", "done"] as const;

const result = DArray.spliceInsert(input, 1, ["inProgress", "review"]);
// result: ["todo", "inProgress", "review", "done"]
