import { A, DString, pipe } from "@duplojs/utils";

const input = ["café", "naïve", "résumé"];
const result = pipe(
	input,
	A.map(DString.normalize("NFC")),
	A.join(" - "),
);
// result: "café - naïve - résumé"
