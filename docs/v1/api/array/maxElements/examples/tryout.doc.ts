import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress"] as const;

const result = DArray.maxElements(input, 3);
// result: true

const backlog = ["todo", "inProgress", "done", "archived"] as const;

const result2 = DArray.maxElements(backlog, 3);
// result2: false
