import { DArray, equal } from "@duplojs/utils";

const steps = ["todo", "done"] as const;

const result = DArray.findAndSpliceInsert(
	steps,
	equal("done"),
	["inProgress", "review"],
);
// result: ["todo", "inProgress", "review", "done"]
