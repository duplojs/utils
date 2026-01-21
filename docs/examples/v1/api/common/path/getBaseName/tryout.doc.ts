import { Path } from "@duplojs/utils";

const fullName = Path.getBaseName("/foo/bar.txt");
// fullName: "bar.txt"
const withoutExt = Path.getBaseName("/foo/bar.txt", { extension: ".txt" });
// withoutExt: "bar"
const windowsName = Path.getBaseName("C:\\foo\\bar");
// windowsName: "bar"
