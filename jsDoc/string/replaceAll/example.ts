import { S, pipe } from "@scripts";

S.replaceAll("Hello world, how are you?", " ", "-"); // "Hello-world,-how-are-you?"

S.replaceAll("My code is 1234", /\d/g, "*"); // "My code is ****"

pipe(
	"a b c",
	S.replaceAll(" ", ""),
); // "abc"
