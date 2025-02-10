import type { SimplifyType } from "./simplifyType";

export type RequiredKeys<T extends object, K extends keyof T = keyof T> =
	SimplifyType<
		Required<
			Pick<T, K>
		> &
		Omit<T, K>
	>;
