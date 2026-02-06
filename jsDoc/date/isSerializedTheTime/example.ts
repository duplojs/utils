import { D } from "@scripts";

const input = "time5400000+";

if (D.isSerializedTheTime(input)) {
	// input: SerializedTheTime
}

const result = D.isSerializedTheTime("time1-");
// result: true

const result2 = D.isSerializedTheTime("01:30:00");
// result2: false
