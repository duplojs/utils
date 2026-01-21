import { Path } from "@duplojs/utils";

const unixPath = Path.normalize("/foo/../bar/");
// unixPath: "/bar/"
const windowsPath = Path.normalize("C:\\temp\\..\\file");
// windowsPath: "C:/file"
const uncPath = Path.normalize("//server/share");
// uncPath: "//server/share"
