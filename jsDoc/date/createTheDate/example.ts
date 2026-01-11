import { D } from "@scripts";

const result = D.createTheDate(1_700_000_000_000);
// result: "date1700000000000+"

const result2 = D.createTheDate(-1_700_000_000_000);
// result2: "date1700000000000-"

const result3 = D.createTheDate(8_640_000_000_000_500);
// result3: "date8640000000000000+"
