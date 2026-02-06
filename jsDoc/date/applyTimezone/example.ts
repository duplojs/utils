import { D, pipe } from "@scripts";

const input = D.create("2024-01-01", {
	hour: "00",
});

const shifted = D.applyTimezone(input, "America/New_York");
// shifted: TheDate

pipe(
	input,
	D.applyTimezone("Europe/Paris"),
); // TheDate
