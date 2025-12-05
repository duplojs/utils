import { A, equal } from "@duplojs/utils";

const steps = ["todo", "done"];

const result = A.findAndSpliceInsert(
	steps,
	equal("done"),
	["inProgress", "review"],
);
// result: ["todo", "inProgress", "review", "done"]
