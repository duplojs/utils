import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress", "done", "archived"] as const;

const result = DArray.copyWithin(input, 1, 0, 2);
// result: ["todo", "todo", "inProgress", "archived"]
