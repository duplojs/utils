import { A } from "@duplojs/utils";

const input = ["todo", "done"] as const;

const result = A.spliceInsert(input, 1, ["inProgress", "review"]);
// result: ["todo", "inProgress", "review", "done"]
