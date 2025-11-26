import { escapeRegExp } from '../../../common/escapeRegExp.mjs';
import { pipe } from '../../../common/pipe.mjs';
import '../../../common/stringToBytes.mjs';
import '../../../common/stringToMillisecond.mjs';
import { innerPipe } from '../../../common/innerPipe.mjs';
import { when as when$1 } from '../../../common/when.mjs';
import { isType } from '../../../common/isType.mjs';
import { or } from '../../../common/or.mjs';
import { justReturn } from '../../../common/justReturn.mjs';
import { find } from '../../../array/find.mjs';
import { to } from '../../../object/to.mjs';
import { map } from '../../../array/map.mjs';
import { join } from '../../../array/join.mjs';
import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import '../../../either/bool/falsy.mjs';
import '../../../either/bool/truthy.mjs';
import '../../../either/bool/base.mjs';
import '../../../either/left/create.mjs';
import '../../../either/left/error.mjs';
import '../../../either/left/fail.mjs';
import '../../../either/kind.mjs';
import '../../../either/right/success.mjs';
import '../../../either/right/create.mjs';
import '../../../either/right/ok.mjs';
import '../../../either/future/success.mjs';
import '../../../either/future/error.mjs';
import '../../../either/future/base.mjs';
import '../../../either/nullable/empty.mjs';
import '../../../either/nullable/filled.mjs';
import '../../../either/nullable/base.mjs';
import '../../../either/nullish/empty.mjs';
import '../../../either/nullish/filled.mjs';
import '../../../either/nullish/base.mjs';
import '../../../either/optional/empty.mjs';
import '../../../either/optional/filled.mjs';
import '../../../either/optional/base.mjs';
import { templateLiteralKind } from './index.mjs';
import '../../../pattern/result.mjs';
import { exhaustive } from '../../../pattern/exhaustive.mjs';
import { when } from '../../../pattern/when.mjs';
import { replace } from '../../../string/replace.mjs';
import { numberKind } from '../number/index.mjs';
import { bigIntKind } from '../bigint/index.mjs';
import { booleanKind } from '../boolean.mjs';
import { nilKind } from '../nil.mjs';
import { emptyKind } from '../empty.mjs';
import { literalKind } from '../literal.mjs';
import { stringKind } from '../string/index.mjs';
import { unionKind } from '../union.mjs';
import { checkerStringRegexKind } from '../string/checkers/regex.mjs';
import { checkerStringMaxKind } from '../string/checkers/max.mjs';
import { checkerStringMinKind } from '../string/checkers/min.mjs';
import { checkerEmailKind } from '../string/checkers/email.mjs';
import { checkerIntKind } from '../number/checkers/int.mjs';

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
            return "(?:[0-9]+)";
        }
        return "(?:[0-9]+(\\.[0-9]+)?)";
    })), when(bigIntKind.has, () => "(?:[0-9]+n)"), when(booleanKind.has, () => "(?:true|false)"), when(nilKind.has, () => "(?:null)"), when(emptyKind.has, () => "(?:undefined)"), when(literalKind.has, (dataParser) => pipe(dataParser.definition.value, map((element) => createTemplateLiteralPattern([element])), join("|"), (pattern) => `(?:${pattern})`)), when(stringKind.has, (dataParser) => pipe(dataParser.definition.checkers, to({
        email: innerPipe(find(checkerEmailKind.has), when$1(checkerEmailKind.has, (checker) => pipe(checker.definition.pattern.source, replace(/^\^/, ""), replace(/\$$/, "")))),
        min: innerPipe(find(checkerStringMinKind.has), when$1(checkerStringMinKind.has, (checker) => checker.definition.min)),
        max: innerPipe(find(checkerStringMaxKind.has), when$1(checkerStringMaxKind.has, (checker) => checker.definition.max)),
        regex: innerPipe(find(checkerStringRegexKind.has), when$1(checkerStringRegexKind.has, (checker) => pipe(checker.definition.regex.source, replace(/^\^/, ""), replace(/\$$/, "")))),
    }), ({ email, regex, max, min }) => {
        if (email) {
            return email;
        }
        else if (regex) {
            return regex;
        }
        else if (max !== undefined && min !== undefined) {
            return `(?:[^]{${min},${max}})`;
        }
        else if (max !== undefined) {
            return `(?:[^]{0,${max}})`;
        }
        else if (min !== undefined) {
            return `(?:[^]{${min},})`;
        }
        return "(?:[^]*)";
    })), innerPipe(when(templateLiteralKind.has, (dataParser) => pipe(dataParser.definition.pattern.source, replace(/^\^/, ""), replace(/\$$/, ""), (pattern) => `(?:${pattern})`)), when(unionKind.has, (dataParser) => pipe(dataParser.definition.options, map((option) => createTemplateLiteralPattern([option])), join("|"), (pattern) => `(?:${pattern})`)), exhaustive))), join(""));
}

export { createTemplateLiteralPattern };
