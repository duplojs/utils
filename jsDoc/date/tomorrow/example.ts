import { D } from "@scripts";

const value = D.tomorrow();
// value: TheDate

const iso = D.toISOString(value);
// iso: string
