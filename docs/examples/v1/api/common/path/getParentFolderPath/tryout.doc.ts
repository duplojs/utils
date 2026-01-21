import { Path } from "@duplojs/utils";

const posixParent = Path.getParentFolderPath("/foo/bar/baz");
// posixParent: "/foo/bar"
const relativeParent = Path.getParentFolderPath("foo/bar");
// relativeParent: "foo"
const windowsParent = Path.getParentFolderPath("C:\\dir\\file");
// windowsParent: "C:/dir"
