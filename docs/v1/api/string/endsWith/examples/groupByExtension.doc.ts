import { A, DString, pipe } from "@duplojs/utils";

const input = ["file.txt", "image.png", "doc.txt", "photo.png"];
const result = pipe(
	input,
	A.group(
		(element, { output }) => DString.endsWith(element, ".txt")
			? output("text", element)
			: output("image", element),
	),
);
// result: { text: ["file.txt", "doc.txt"], image: ["image.png", "photo.png"] }
