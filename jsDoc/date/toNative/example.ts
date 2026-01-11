import { D, pipe } from "@scripts";

const input = D.create("2023-11-14");
const result = D.toNative(input);
// result: Date { time: 1699920000000 }

pipe(
	input,
	D.toNative,
); // result: Date { time: 1699920000000 }
