import { N, A, pipe, createEnum } from "@duplojs/utils";

const totalBudget = 10000;
const departmentEnum = createEnum(["IT", "Marketing", "HR", "Sales"]);

const result = pipe(
	departmentEnum.toTuple(),
	(departments) => ({
		departments,
		budgetPerDepartment: pipe(
			totalBudget,
			N.divide(A.length(departments)),
			N.round,
		),
	}),
	({ departments, budgetPerDepartment }) => pipe(
		departments,
		A.map((department) => ({
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
