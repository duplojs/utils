import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const iso = D.toISOString(input);
// iso: string

const iso2 = D.toISOString("date1718841600000+");
// iso2: string

pipe(
	input,
	D.toISOString,
); // string
