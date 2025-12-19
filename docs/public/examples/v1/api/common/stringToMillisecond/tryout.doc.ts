import { stringToMillisecond } from "@duplojs/utils";

const duration = stringToMillisecond("1.5d", "2h", 5000);
// duration: number of milliseconds for 1.5 days + 2 hours + 5 seconds
