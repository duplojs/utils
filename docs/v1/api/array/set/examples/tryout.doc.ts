import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = DArray.set(input, 1, "review");
// result: ["todo", "review", "done"]
