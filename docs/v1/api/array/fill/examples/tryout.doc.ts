import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress", "done", "archived"] as const;

const result = DArray.fill(input, "review", 1, 3);
// result: ["todo", "review", "review", "archived"]

