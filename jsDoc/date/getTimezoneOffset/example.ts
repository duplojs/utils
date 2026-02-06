import { D, pipe } from "@scripts";

const input = D.create("2024-01-01", {
	hour: "00",
});

const offset = D.getTimezoneOffset(input, "America/New_York");
// offset: number

pipe(
	input,
	D.getTimezoneOffset("Europe/Paris"),
); // number
