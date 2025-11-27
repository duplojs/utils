import { A, DString, pipe, P } from "@duplojs/utils";

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
	A.reduce(
		A.reduceFrom<{
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
				P.when(
					DString.startsWith("[ERROR]"),
					(log) => ({
						errors: A.push(
							lastValue.errors,
							DString.replace(log, /^\[ERROR\]\s*/, ""),
						),
					}),
				),
				P.when(
					DString.startsWith("[WARN]"),
					(log) => ({
						warnings: A.push(
							lastValue.warnings,
							DString.replace(log, /^\[WARN\]\s*/, ""),
						),
					}),
				),
				P.when(
					DString.startsWith("[INFO]"),
					(log) => ({
						info: A.push(
							lastValue.info,
							DString.replace(log, /^\[INFO\]\s*/, ""),
						),
					}),
				),
				P.otherwise(() => ({})),
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
