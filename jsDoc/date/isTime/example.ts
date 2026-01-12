import { D } from "@scripts";

const input = "time3600000+";

if (D.isTime(input)) {
	// input: TheTime
}

const result = D.isTime("time3600000-");
// result: true

const result2 = D.isTime("time99999999999999999+");
// result2: false
