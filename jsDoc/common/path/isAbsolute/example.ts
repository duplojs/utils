import { Path } from "@scripts";

const unixResult = Path.isAbsolute("/var/log");
// unixResult: true
const windowsResult = Path.isAbsolute("C:\\temp");
// windowsResult: true
const relativeResult = Path.isAbsolute("docs/readme.md");
// relativeResult: false
const input: "/etc" | "local" = "/etc";
if (Path.isAbsolute(input)) {
	// input: "/etc"
}
