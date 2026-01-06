import { type Timezone } from "../timezone";

export interface SpoolingDate {
	value: string | Date | number;
	timezone?: Timezone;
	year?: number;
	month?: number;
	day?: number;
	hour?: number;
	minute?: number;
	second?: number;
	millisecond?: number;
}
