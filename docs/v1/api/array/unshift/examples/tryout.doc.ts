import { A } from "@duplojs/utils";

const input = ["inProgress", "done"];

const result = A.unshift(input, "todo");
// result: ["todo", "inProgress", "done"]
