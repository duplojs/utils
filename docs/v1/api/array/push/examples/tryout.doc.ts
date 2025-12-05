import { A } from "@duplojs/utils";

const input = ["todo", "inProgress"];

const result = A.push(input, "review", "done");
// result: ["todo", "inProgress", "review", "done"]
