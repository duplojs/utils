import { A } from "@duplojs/utils";

const input = ["todo", "inProgress", "done", "archived"] as const;

const result = A.copyWithin(input, 1, 0, 2);
// result: ["todo", "todo", "inProgress", "archived"]
