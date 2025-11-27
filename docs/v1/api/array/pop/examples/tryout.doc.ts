import { A } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = A.pop(input);
// result: ["todo", "inProgress"]

const result2 = A.pop(result);
// result2: ["todo"]
