import { templateLiteralKind } from './index.mjs';
import { numberKind } from '../number/index.mjs';
import { bigIntKind } from '../bigint/index.mjs';
import { booleanKind } from '../boolean.mjs';
import { nilKind } from '../nil.mjs';
import { emptyKind } from '../empty.mjs';
import { literalKind } from '../literal.mjs';
import { stringKind } from '../string/index.mjs';
import { unionKind } from '../union.mjs';
import { innerPipe } from '../../../common/innerPipe.mjs';
import { escapeRegExp } from '../../../common/escapeRegExp.mjs';
import { or } from '../../../common/or.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { join } from '../../../array/join.mjs';
import { map } from '../../../array/map.mjs';
import { when } from '../../../pattern/when.mjs';
import { replace } from '../../../string/replace.mjs';
import { exhaustive } from '../../../pattern/exhaustive.mjs';
import { when as when$1 } from '../../../common/when.mjs';
import { isType } from '../../../common/isType.mjs';

const decimalNumberPattern = "[+-]?(?:(?:[0-9]+(?:\\.[0-9]*)?)|(?:\\.[0-9]+))(?:[eE][+-]?[0-9]+)?";
const numericBasePattern = "0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+)";
const numberPattern = `(?:${decimalNumberPattern})|(?:${numericBasePattern})`;
const bigintPattern = `(?:-?${numericBasePattern})|(?:-?(?:0|[1-9][0-9]*))`;
function createTemplateLiteralPattern(templatePart) {
    return pipe(templatePart, map(innerPipe(when(or([
        isType("bigint"),
        isType("boolean"),
        isType("null"),
        isType("number"),
        isType("string"),
        isType("undefined"),
    ]), (value) => {
        if (typeof value === "number" && !Number.isFinite(value)) {
            return `(?:${numberPattern})`;
        }
        return pipe(value, when$1(isType("bigint"), (value) => `${value}n`), String, escapeRegExp, (value) => `(?:${value})`);
    }), when(numberKind.has, () => `(?:${numberPattern})`), when(bigIntKind.has, () => `(?:(?:${bigintPattern})n)`), when(booleanKind.has, () => "(?:true|false)"), when(nilKind.has, () => "(?:null)"), when(emptyKind.has, () => "(?:undefined)"), when(literalKind.has, (dataParser) => pipe(dataParser.definition.value, map((element) => createTemplateLiteralPattern([element])), join("|"), (pattern) => `(?:${pattern})`)), when(stringKind.has, () => "(?:[^]*)"), innerPipe(when(templateLiteralKind.has, (dataParser) => pipe(dataParser.definition.pattern.source, replace(/^\^/, ""), replace(/\$$/, ""), (pattern) => `(?:${pattern})`)), when(unionKind.has, (dataParser) => pipe(dataParser.definition.options, map((option) => createTemplateLiteralPattern([option])), join("|"), (pattern) => `(?:${pattern})`)), exhaustive))), join(""));
}

export { createTemplateLiteralPattern };
