import { DString, DEither, pipe, when, whenNot } from "@duplojs/utils";

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
			(name) => DEither.success({
				name: DString.substring(name, 0, dotIndex as number),
				extension: DString.substring(name, (dotIndex as number) + 1),
			}),
		),
	),
	whenNot(
		DEither.isRight,
		() => DEither.error("No file extension found"),
	),
);

/**
 * result: DEither.EitherSuccess<{
 *   name: "document",
 *   extension: "pdf"
 * }> | DEither.EitherError<"No file extension found">
 */
