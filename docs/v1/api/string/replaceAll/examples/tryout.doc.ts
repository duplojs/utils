import { DString } from "@duplojs/utils";

const input = "Hello world, how are you?";
const result = DString.replaceAll(input, " ", "-");
// result: "Hello-world,-how-are-you?"

const pattern = /\d/g;
const result2 = DString.replaceAll("My code is 1234", pattern, "*");
// result2: "My code is ****"
