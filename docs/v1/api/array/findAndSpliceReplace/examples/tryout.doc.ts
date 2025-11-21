import { DArray, equal } from "@duplojs/utils";

const steps = ["todo", "inProgress", "review", "done"] as const;

const result = DArray.findAndSpliceReplace(
	steps,
	equal("inProgress"),
	["ready", "deploy"],
);
// result: ["todo", "ready", "deploy", "done"]
