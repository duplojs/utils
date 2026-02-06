import { D } from "@scripts";

const value = D.yesterday();
// value: TheDate

const iso = D.toISOString(value);
// iso: string
