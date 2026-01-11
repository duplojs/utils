import { D } from "@scripts";

const input = D.createTheTime(90_000);
const result = D.toTimeValue(input);
// result: 90000

const result2 = D.toTimeValue("time3600000-");
// result2: -3600000

const result3 = D.toTimeValue("time90000+");
// result3: 90000
