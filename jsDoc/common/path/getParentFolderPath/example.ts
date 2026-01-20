import { Path } from "@scripts";

const posixResult = Path.getParentFolderPath("/foo/bar/baz");
// posixResult: "/foo/bar"
const relativeResult = Path.getParentFolderPath("foo/bar");
// relativeResult: "foo"
const windowsResult = Path.getParentFolderPath("C:\\dir\\file");
// windowsResult: "C:/dir"
