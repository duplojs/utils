import { pipe, S } from "@duplojs/utils";

const input = "Utils";
const result = S.prepend(input, "Duplo", "JS ");
// "DuploJS Utils"

pipe(
	"World",
	S.prepend("Hello"),
);
// "HelloWorld"
