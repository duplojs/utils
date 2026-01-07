import { D } from "@duplojs/utils";

const ok = D.isSafeTimeValue(0);
const unsafe = D.isSafeTimeValue(Number.MAX_SAFE_INTEGER + 1);
const boundary = D.isSafeTimeValue(D.maxTimeValue);
// ok: true
// unsafe: false
// boundary: false
