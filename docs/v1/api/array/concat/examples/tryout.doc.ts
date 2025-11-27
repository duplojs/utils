import { A } from "@duplojs/utils";

const base = ["todo", "inProgress"] as const;
const newSteps = ["review", "done"] as const;

const result = A.concat(base, newSteps);
// result: ["todo", "inProgress", "review", "done"]

const extended = A.concat(result, ["archived"], ["report"]);
// extended: ["todo", "inProgress", "review", "done", "archived", "report"]
