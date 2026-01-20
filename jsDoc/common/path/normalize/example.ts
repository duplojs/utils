import { Path } from "@scripts";

const posixResult = Path.normalize("/foo/../bar/");
// posixResult: "/bar/"
const windowsResult = Path.normalize("C:\\temp\\..\\file");
// windowsResult: "C:/file"
const uncResult = Path.normalize("//server/share");
// uncResult: "//server/share"
