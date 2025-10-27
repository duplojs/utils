import { DString, DArray, pipe } from "@duplojs/utils";

const userInputs = [
	"  john@example.com  ",
	"\t\tpassword123\n",
	"   User Name   ",
];

const result = pipe(
	userInputs,
	DArray.map(DString.trim),
);

// result: ["john@example.com", "password123", "User Name"]
