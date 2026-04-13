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
import { checkerStringMaxKind } from '../string/checkers/max.mjs';
import { checkerStringMinKind } from '../string/checkers/min.mjs';
import { checkerIntKind } from '../number/checkers/int.mjs';
import { justReturn } from '../../../common/justReturn.mjs';
import { escapeRegExp } from '../../../common/escapeRegExp.mjs';
import { or } from '../../../common/or.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { join } from '../../../array/join.mjs';
import { map } from '../../../array/map.mjs';
import { when } from '../../../pattern/when.mjs';
import { replace } from '../../../string/replace.mjs';
import { exhaustive } from '../../../pattern/exhaustive.mjs';
import { to } from '../../../object/to.mjs';
import { select } from '../../../array/select.mjs';
import { minOf } from '../../../array/minOf.mjs';
import { maxOf } from '../../../array/maxOf.mjs';
import { find } from '../../../array/find.mjs';
import { when as when$1 } from '../../../common/when.mjs';
import { isType } from '../../../common/isType.mjs';

function createTemplateLiteralPattern(templatePart) {
    return pipe(templatePart, map(innerPipe(when(or([
        isType("string"),
        isType("boolean"),
        isType("bigint"),
        isType("null"),
        isType("undefined"),
        isType("number"),
    ]), innerPipe(when$1(isType("bigint"), (value) => `${value}n`), String, escapeRegExp, (value) => `(?:${value})`)), when(numberKind.has, (dataParser) => pipe(dataParser.definition.checkers, to({
        int: innerPipe(find(checkerIntKind.has), when$1(checkerIntKind.has, justReturn(true))),
    }), ({ int }) => {
        if (int) {
            return "(?:-?[0-9]+)";
        }
        return "(?:-?[0-9]+(?:\\.[0-9]+)?)";
    })), when(bigIntKind.has, () => "(?:[0-9]+n)"), when(booleanKind.has, () => "(?:true|false)"), when(nilKind.has, () => "(?:null)"), when(emptyKind.has, () => "(?:undefined)"), when(literalKind.has, (dataParser) => pipe(dataParser.definition.value, map((element) => createTemplateLiteralPattern([element])), join("|"), (pattern) => `(?:${pattern})`)), when(stringKind.has, (dataParser) => pipe(dataParser.definition.checkers, to({
        min: innerPipe(select(({ element, select, skip }) => checkerStringMinKind.has(element)
            ? select(element.definition.min)
            : skip()), maxOf),
        max: innerPipe(select(({ element, select, skip }) => checkerStringMaxKind.has(element)
            ? select(element.definition.max)
            : skip()), minOf),
    }), ({ max, min }) => {
        if (max !== undefined || min !== undefined) {
            return `(?:[^]{${min ?? 0},${max ?? ""}})`;
        }
        return "(?:[^]*)";
    })), innerPipe(when(templateLiteralKind.has, (dataParser) => pipe(dataParser.definition.pattern.source, replace(/^\^/, ""), replace(/\$$/, ""), (pattern) => `(?:${pattern})`)), when(unionKind.has, (dataParser) => pipe(dataParser.definition.options, map((option) => createTemplateLiteralPattern([option])), join("|"), (pattern) => `(?:${pattern})`)), exhaustive))), join(""));
}

export { createTemplateLiteralPattern };
