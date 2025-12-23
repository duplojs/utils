import { A } from "@duplojs/utils";

const input = ["todo", "inProgress", "review", "done"] as const;

const result = A.spliceReplace(input, 1, ["ready", "deploy"]);
// result: ["todo", "ready", "deploy", "done"]
