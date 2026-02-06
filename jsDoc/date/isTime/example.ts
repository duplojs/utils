import { D } from "@scripts";

const input = D.createTime(1, "hour") as unknown;

if (D.isTime(input)) {
	// input: TheTime
}

const result = D.isTime(D.create("2024-06-20"));
// result: false
