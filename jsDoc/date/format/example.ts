import { D, pipe } from "@scripts";

const input = D.create("2024-01-01", {
	hour: "00",
	minute: "00",
	second: "00",
	millisecond: "123",
});

const full = D.format(input, "YYYY-MM-DD HH:mm:ss.SSS ZZ", "UTC");
// full: string

pipe(
	input,
	D.format("DD/MM/YYYY HH:mm", "Europe/Paris"),
); // string
