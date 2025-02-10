import type { SimplifyType } from "./simplifyType";

export type PartialKeys<T extends object, K extends keyof T = keyof T> =
	SimplifyType<
		Omit<T, K> &
		Partial<
			Pick<T, K>
		>
	>;
