import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress"];

const result = DArray.push(input, "review", "done");
// result: ["todo", "inProgress", "review", "done"]

const addArchived = DArray.push("archived");
const result2 = addArchived(result);
// result2: ["todo", "inProgress", "review", "done", "archived"]
