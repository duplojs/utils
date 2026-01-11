import { S, pipe } from "@scripts";

S.repeat("abc", 3); // "abcabcabc"

pipe(
	"-",
	S.repeat(5),
); // "-----"

S.repeat("Duplo", 2); // "DuploDuplo"
