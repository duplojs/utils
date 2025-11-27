import { A } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = A.set(input, 1, "review");
// result: ["todo", "review", "done"]
