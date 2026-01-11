import { S, pipe } from "@scripts";

S.normalize("CafÃ©", "NFD"); // "Café"

pipe(
	"e\u0301",
	S.normalize("NFC"),
); // "é"

S.normalize("Duplo", "NFKD"); // "Duplo"
