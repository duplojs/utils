import { Path } from "@duplojs/utils";

const posixParent = Path.getParentFolderPath("/foo/bar/baz");
// posixParent: "/foo/bar"
const trailingParent = Path.getParentFolderPath("/foo/bar/");
// trailingParent: "/foo"
const relativeParent = Path.getParentFolderPath("foo");
// relativeParent: null
