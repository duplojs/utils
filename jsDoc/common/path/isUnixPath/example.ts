import { Path } from "@scripts";

const unixResult = Path.isUnixPath("/usr/local/bin");
// unixResult: true
const relativeResult = Path.isUnixPath("src/utils");
// relativeResult: true
const windowsResult = Path.isUnixPath("C:\\temp\\file.txt");
// windowsResult: false
