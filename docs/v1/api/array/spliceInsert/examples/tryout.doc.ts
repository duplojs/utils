import { A } from "@duplojs/utils";

const input = ["todo", "done"];

const result = A.spliceInsert(input, 1, ["inProgress", "review"]);
// result: ["todo", "inProgress", "review", "done"]
