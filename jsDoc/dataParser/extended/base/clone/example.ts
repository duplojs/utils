import { DPE } from "@scripts";

const base = DPE.string();
const cloned = base.clone();

const withMin = DPE.string().min(3);
const withMinClone = withMin.clone();

const coerceNumber = DPE.coerce.number();
const coerceNumberClone = coerceNumber.clone();
