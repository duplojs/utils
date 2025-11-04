import { DString, DArray, pipe } from "@duplojs/utils";

const variableName = "maxRetryAttempts";

const result = pipe(
	variableName,
	DString.replace(/([A-Z])/g, "_$1"),
	DString.toUpperCase,
	DString.replace(/^_/, ""),
);

// result: "MAX_RETRY_ATTEMPTS"
