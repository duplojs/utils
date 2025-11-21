import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = DArray.reverse(input);
// result: ["done", "inProgress", "todo"]

const input2 = [1, 2, 3, 4] as const;

const result2 = DArray.reverse(input2);
// result2: [4, 3, 2, 1]
