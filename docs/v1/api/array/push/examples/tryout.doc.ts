import { A } from "@duplojs/utils";

const input = ["todo", "inProgress"];

const result = A.push(input, "review", "done");
// result: ["todo", "inProgress", "review", "done"]

const addArchived = A.push("archived");
const result2 = addArchived(result);
// result2: ["todo", "inProgress", "review", "done", "archived"]
