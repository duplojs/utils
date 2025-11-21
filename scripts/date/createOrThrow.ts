import { kindHeritage, unwrap } from "@scripts/common";
import { create } from "./create";
import type { TheDate } from "./types";
import * as DEither from "@scripts/either";

export class CreateTheDateError extends kindHeritage("duplo-utils-invalide-input-format-date", [], Error) {
	public constructor() {
		super({}, ["invalide-input-format-date"]);
	}
}

export function createOrThrow<
	GenericInput extends TheDate | Date | number,
>(
	input: GenericInput,
) {
	const result = create(input);

	if (DEither.isLeft(result)) {
		throw new CreateTheDateError();
	}

	return unwrap(result);
}
