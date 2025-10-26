import type * as All from "@duplojs/utils";
import type * as DA from "@duplojs/utils/array";
import type * as DDP from "@duplojs/utils/dataParser";
import type * as DDPC from "@duplojs/utils/dataParserCoerce";
import type * as DDPE from "@duplojs/utils/dataParserExtended";
import type * as DE from "@duplojs/utils/either";
import type * as DG from "@duplojs/utils/generator";
import type * as DN from "@duplojs/utils/number";
import type * as DO from "@duplojs/utils/object";
import type * as DP from "@duplojs/utils/pattern";
import type * as DS from "@duplojs/utils/string";

type Check1 = All.ExpectType<
	typeof All.DArray,
	typeof DA,
	"strict"
>;

type Check2 = All.ExpectType<
	typeof All.DDataParser,
	typeof DDP,
	"strict"
>;

type Check22 = All.ExpectType<
	typeof All.DDataParser.coerce,
	typeof DDPC,
	"strict"
>;

type Check23 = All.ExpectType<
	typeof All.DDataParser.extended,
	typeof DDPE,
	"strict"
>;

type Check3 = All.ExpectType<
	typeof All.DEither,
	typeof DE,
	"strict"
>;

type Check4 = All.ExpectType<
	typeof All.DGenerator,
	typeof DG,
	"strict"
>;

type Check5 = All.ExpectType<
	typeof All.DNumber,
	typeof DN,
	"strict"
>;

type Check6 = All.ExpectType<
	typeof All.DNumber,
	typeof DN,
	"strict"
>;

type Check7 = All.ExpectType<
	typeof All.DObject,
	typeof DO,
	"strict"
>;

type Check8 = All.ExpectType<
	typeof All.DObject,
	typeof DO,
	"strict"
>;

type Check9 = All.ExpectType<
	typeof All.DPattern,
	typeof DP,
	"strict"
>;

type Check10 = All.ExpectType<
	typeof All.DString,
	typeof DS,
	"strict"
>;
