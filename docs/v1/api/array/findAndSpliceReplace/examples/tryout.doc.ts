import { A, equal } from "@duplojs/utils";

const steps = ["todo", "inProgress", "review", "done"];

const result = A.findAndSpliceReplace(
	steps,
	equal("inProgress"),
	["ready", "deploy"],
);
// result: ["todo", "ready", "deploy", "done"]
