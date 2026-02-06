import { D } from "@scripts";

const input = D.create("2024-06-20", {
	hour: "12",
});

const ParisTimezone = D.timezone["Europe/Paris"];
// Timezone: "Europe/Paris"

const offset = D.getTimezoneOffset(input, "America/New_York");
// offset: number
