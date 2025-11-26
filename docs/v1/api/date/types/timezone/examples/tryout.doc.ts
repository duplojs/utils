import { DDate } from "@duplojs/utils";

type Timezone = DDate.Timezone;

const paris = DDate.timezone["Europe/Paris"];
const newYork = DDate.timezone["America/New_York"];
// paris / newYork: string
