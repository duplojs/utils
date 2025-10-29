import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const samples = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const wavelength = 8;
const angularWavelength = DNumber.divide(DNumber.multiply(2, Math.PI), wavelength);

const result = pipe(
	samples,
	DArray.map(
		innerPipe(
			DNumber.multiply(angularWavelength),
			DNumber.sin,
		),
	),
);

// result: [0, 0.707, 1, 0.707, 0, -0.707, -1, -0.707, ...]
