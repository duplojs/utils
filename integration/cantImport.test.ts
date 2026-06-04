import * as All from "@duplojs/utils";
import * as DA from "@duplojs/utils/array";
import * as DDP from "@duplojs/utils/dataParser";
import * as DDPC from "@duplojs/utils/dataParserCoerce";
import * as DDPE from "@duplojs/utils/dataParserExtended";
import * as DE from "@duplojs/utils/either";
import * as DG from "@duplojs/utils/generator";
import * as DN from "@duplojs/utils/number";
import * as DO from "@duplojs/utils/object";
import * as DP from "@duplojs/utils/pattern";
import * as DS from "@duplojs/utils/string";
import * as DD from "@duplojs/utils/date";
import * as DC from "@duplojs/utils/clean";
import * as DF from "@duplojs/utils/flow";
import * as DCommon from "@duplojs/utils/common";

it("just import lib", async() => {
	[All, DA, DDP, DDPC, DDPE, DE, DG, DN, DO, DP, DS, DD, DC, DF, DCommon].concat();
	await import("@duplojs/utils");
});
