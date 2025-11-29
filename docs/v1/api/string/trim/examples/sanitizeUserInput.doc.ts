import { DString, A, pipe } from "@duplojs/utils";

const userInputs = [
	"  john@example.com  ",
	"\t\tpassword123\n",
	"   User Name   ",
];

const result = pipe(
	userInputs,
	A.map(DString.trim),
);

// result: ["john@example.com", "password123", "User Name"]
