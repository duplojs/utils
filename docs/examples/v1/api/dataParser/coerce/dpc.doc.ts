import { DP, DPC } from "@duplojs/utils";

const schema = DP.object({
	username: DPC.string(),
	attempts: DPC.number().addChecker(DP.checkerNumberMax(5)),
	marketingOptIn: DPC.boolean(),
	lastLogin: DPC.date(),
});

type SchemaOutput = DP.Output<typeof schema>;
// SchemaOutput: {
//   username: string;
//   attempts: number;
//   marketingOptIn: boolean;
//   lastLogin: D.TheDate;
// }

