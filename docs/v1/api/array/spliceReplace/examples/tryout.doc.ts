import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress", "review", "done"] as const;

const result = DArray.spliceReplace(input, 1, ["ready", "deploy"]);
// result: ["todo", "ready", "deploy", "done"]
