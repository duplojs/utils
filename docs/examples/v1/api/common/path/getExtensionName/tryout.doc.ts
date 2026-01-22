import { Path } from "@duplojs/utils";

const txtExt = Path.getExtensionName("/foo/bar.txt");
// txtExt: "txt"
const gzExt = Path.getExtensionName("archive.tar.gz");
// gzExt: "gz"
const noExt = Path.getExtensionName("file.");
// noExt: null
