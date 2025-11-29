import { DString, E, pipe, when, whenNot } from "@duplojs/utils";

const logLine = "   [INFO] Application started successfully";

const result = pipe(
	logLine,
	DString.trimStart,
	DString.indexOf("]"),
	when(
		(index) => index !== undefined,
		(index) => pipe(
			logLine,
			DString.trimStart,
			(line) => E.success({
				level: DString.substring(line, 1, index),
				message: DString.substring(line, index + 2),
			}),
		),
	),
	whenNot(
		E.isRight,
		() => E.error("Invalid log format: missing closing bracket"),
	),
);

/**
 * result: E.EitherSuccess<{
 *   level: "INFO",
 *   message: "Application started successfully"
 * }> | E.EitherError<"Invalid log format: missing closing bracket">
 */
