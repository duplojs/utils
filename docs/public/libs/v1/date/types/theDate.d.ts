/**
 * Represents a TheDate string: a UTC timestamp encoded with a sign.
 * It solves common date issues across languages and HTTP by using a single transportable format, independent of local timezone quirks.
 * When you need local time (e.g., Brazil), you convert from the UTC timestamp with getters and a timezone, keeping storage robust and consistent.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/theDate
 * 
 * @namespace D
 * 
 */
export type TheDate = `date${number}${"-" | "+"}`;
