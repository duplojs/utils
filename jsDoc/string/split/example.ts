import { S, pipe } from "@scripts";

S.split("apple,banana,cherry", ","); // ["apple", "banana", "cherry"]

pipe(
	"aa.bb.cc",
	S.split("."),
); // ["aa", "bb", "cc"]

S.split("alpha-beta-gamma", "-", { limit: 2 }); // ["alpha", "beta"]
