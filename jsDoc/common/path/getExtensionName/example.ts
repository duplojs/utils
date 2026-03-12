import { Path } from "@scripts";

const txtResult = Path.getExtensionName("/foo/bar.txt");
// txtResult: "txt"
const txtWithDotResult = Path.getExtensionName("/foo/bar.txt", { withDot: true });
// txtWithDotResult: ".txt"
const tarResult = Path.getExtensionName("archive.tar.gz");
// tarResult: "gz"
const dotResult = Path.getExtensionName("file.");
// dotResult: null
