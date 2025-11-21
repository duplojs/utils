import { DArray } from "@duplojs/utils";

const input = ["inProgress", "done"];

const result = DArray.unshift(input, "todo");
// result: ["todo", "inProgress", "done"]
