import { DString, DEither, pipe, when, whenNot } from "@duplojs/utils";

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
			(line) => DEither.success({
				level: DString.substring(line, 1, index),
				message: DString.substring(line, index + 2),
			}),
		),
	),
	whenNot(
		DEither.isRight,
		() => DEither.error("Invalid log format: missing closing bracket"),
	),
);

/**
 * result: DEither.EitherSuccess<{
 *   level: "INFO",
 *   message: "Application started successfully"
 * }> | DEither.EitherError<"Invalid log format: missing closing bracket">
 */
