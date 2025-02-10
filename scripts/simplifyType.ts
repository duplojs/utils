export type SimplifyType<T> = T extends Record<number, unknown> ? { [K in keyof T]: SimplifyType<T[K]> } : T;

export type SimplifyTypeForce<T> = T extends object ? { [K in keyof T]: SimplifyTypeForce<T[K]> } : T;
