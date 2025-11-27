import { A } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = A.shift(input);
// result: ["inProgress", "done"]

const result2 = A.shift(result);
// result2: ["done"]
