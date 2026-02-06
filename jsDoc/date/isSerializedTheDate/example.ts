import { D } from "@scripts";

const input = "date1718841600000+";

if (D.isSerializedTheDate(input)) {
	// input: SerializedTheDate
}

const result = D.isSerializedTheDate("date42-");
// result: true

const result2 = D.isSerializedTheDate("2024-06-20");
// result2: false
