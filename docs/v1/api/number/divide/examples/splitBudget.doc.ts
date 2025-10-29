import { DNumber, DArray, pipe, createEnum } from "@duplojs/utils";

const totalBudget = 10000;
const departmentEnum = createEnum(["IT", "Marketing", "HR", "Sales"]);

const result = pipe(
	departmentEnum.toTuple(),
	(departments) => ({
		departments,
		budgetPerDepartment: pipe(
			totalBudget,
			DNumber.divide(DArray.length(departments)),
			DNumber.round,
		),
	}),
	({ departments, budgetPerDepartment }) => pipe(
		departments,
		DArray.map((department) => ({
			department,
			budget: budgetPerDepartment,
		})),
	),
);

// result: [
//   { department: "IT", budget: 2500 },
//   { department: "Marketing", budget: 2500 },
//   { department: "HR", budget: 2500 },
//   { department: "Sales", budget: 2500 }
// ]
