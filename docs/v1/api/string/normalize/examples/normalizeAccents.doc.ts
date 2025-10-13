import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["café", "naïve", "résumé"];
const result = pipe(
	input,
	DArray.map(DString.normalize("NFC")),
	DArray.join(" - "),
);
// result: "café - naïve - résumé"
