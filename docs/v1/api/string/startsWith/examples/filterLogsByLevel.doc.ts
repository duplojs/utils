import { DArray, DString, pipe, DPattern } from "@duplojs/utils";

const logs = [
	"[INFO] Server started on port 3000",
	"[DEBUG] Database connection established",
	"[ERROR] Failed to fetch user data",
	"[INFO] Request processed successfully",
	"[WARN] Deprecated API endpoint used",
	"[ERROR] Connection timeout",
	"[DEBUG] Cache hit for key: user:123",
];

const result = pipe(
	logs,
	DArray.reduce(
		DArray.reduceFrom<{
			errors: string[];
			warnings: string[];
			info: string[];
		}>({
			errors: [],
			warnings: [],
			info: [],
		}),
		({ element, lastValue, nextWithObject }) => nextWithObject(
			lastValue,
			pipe(
				element,
				DPattern.when(
					DString.startsWith("[ERROR]"),
					(log) => ({
						errors: DArray.push(
							lastValue.errors,
							DString.replace(log, /^\[ERROR\]\s*/, ""),
						),
					}),
				),
				DPattern.when(
					DString.startsWith("[WARN]"),
					(log) => ({
						warnings: DArray.push(
							lastValue.warnings,
							DString.replace(log, /^\[WARN\]\s*/, ""),
						),
					}),
				),
				DPattern.when(
					DString.startsWith("[INFO]"),
					(log) => ({
						info: DArray.push(
							lastValue.info,
							DString.replace(log, /^\[INFO\]\s*/, ""),
						),
					}),
				),
				DPattern.otherwise(() => ({})),
			),
		),
	),
);

/**
 * result: {
 *   errors: [
 *     "Failed to fetch user data",
 *     "Connection timeout"
 *   ],
 *   warnings: [
 *     "Deprecated API endpoint used"
 *   ],
 *   info: [
 *     "Server started on port 3000",
 *     "Request processed successfully"
 *   ]
 * }
 */
