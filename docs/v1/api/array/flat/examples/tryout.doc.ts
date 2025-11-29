import { A } from "@duplojs/utils";

const input = [
	["feature", "request"],
	["bug", "fix"],
] as const;

const result = A.flat(input);
// result: ["feature", "request", "bug", "fix"]

const input2 = [
	["frontend", ["ui", "ux"]],
	[["backend"], ["api", ["queue"]]],
] as const;

const result2 = A.flat(input2, 2);
// result2: [
//  "frontend",
//  "ui",
//  "ux",
//  "backend",
//  "api",
//  "queue",
// ]
