import { DString, E, pipe, when, whenNot } from "@duplojs/utils";

const filename = "document.pdf   ";

const result = pipe(
	filename,
	DString.trimEnd,
	DString.lastIndexOf("."),
	when(
		(dotIndex) => dotIndex !== undefined,
		(dotIndex) => pipe(
			filename,
			DString.trimEnd,
			(name) => E.success({
				name: DString.substring(name, 0, dotIndex as number),
				extension: DString.substring(name, (dotIndex as number) + 1),
			}),
		),
	),
	whenNot(
		E.isRight,
		() => E.error("No file extension found"),
	),
);

/**
 * result: E.EitherSuccess<{
 *   name: "document",
 *   extension: "pdf"
 * }> | E.EitherError<"No file extension found">
 */
