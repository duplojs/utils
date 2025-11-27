import { A } from "@duplojs/utils";

const input = ["todo", "inProgress", "review", "done"] as const;

const result = A.spliceDelete(input, 1, 2);
// result: ["todo", "done"]
