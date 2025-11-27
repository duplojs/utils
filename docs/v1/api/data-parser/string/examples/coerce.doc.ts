import * as DDataParserCoerce from "@duplojs/utils/dataParserCoerce";
import { unwrap } from "@duplojs/utils/common";
import * as DEither from "@duplojs/utils/either";

const schema = DDataParserCoerce.string();
// or
// const schema = DDataParser.coerce.string();
// or
// const schema = DDataParser.string({ coerce: true });

const result = schema.parse(11111);

if (DEither.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
