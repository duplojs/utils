import { Path } from "@duplojs/utils";

const txtExt = Path.getExtensionName("/foo/bar.txt");
// txtExt: "txt"
const txtExtWithDot = Path.getExtensionName("/foo/bar.txt", { withDot: true });
// txtExtWithDot: ".txt"
const gzExt = Path.getExtensionName("archive.tar.gz");
// gzExt: "gz"
const noExt = Path.getExtensionName("file.");
// noExt: null
