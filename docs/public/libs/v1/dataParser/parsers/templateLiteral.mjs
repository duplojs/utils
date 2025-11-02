import { escapeRegExp } from '../../common/escapeRegExp.mjs';
import { pipe } from '../../common/pipe.mjs';
import { innerPipe } from '../../common/innerPipe.mjs';
import { when as when$1 } from '../../common/when.mjs';
import { isType } from '../../common/isType.mjs';
import { whenElse } from '../../common/whenElse.mjs';
import { map } from '../../array/map.mjs';
import { join } from '../../array/join.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import '../../pattern/result.mjs';
import { exhaustive } from '../../pattern/exhaustive.mjs';
import { when } from '../../pattern/when.mjs';
import { replace } from '../../string/replace.mjs';
import { stringKind } from './string/index.mjs';
import { numberKind } from './number/index.mjs';
import { bigIntKind } from './bigint/index.mjs';
import { literalKind } from './literal.mjs';
import { emptyKind } from './empty.mjs';
import { nilKind } from './nil.mjs';
import { booleanKind } from './boolean.mjs';
import { createDataParserKind } from '../kind.mjs';

const templateLiteralKind = createDataParserKind("template-literal");
function templateLiteral(template, definition) {
    const pattern = pipe(template, map(innerPipe(when(isType("string"), (value) => `(?:${escapeRegExp(value)})`), when(numberKind.has, () => "(:?[0-9]+)"), when(bigIntKind.has, () => "(?:[0-9]+n)"), when(booleanKind.has, () => "(?:true|false)"), when(nilKind.has, () => "(?:null)"), when(emptyKind.has, () => "(?:undefined)"), when(literalKind.has, (dataParser) => pipe(dataParser.definition.value, map(innerPipe(when$1(isType("bigint"), (value) => `${value}n`), String, escapeRegExp)), join("|"), (pattern) => `(?:${pattern})`)), when(stringKind.has, innerPipe(whenElse((dataParser) => !!dataParser.definition.checkers.length, (dataParser) => pipe(dataParser.definition.checkers, map((element) => pipe(element.definition.pattern.source, replace(/^\^/, ""), replace(/\$$/, ""))), join("")), () => "(?:[^]*)"))), when(templateLiteralKind.has, (dataParser) => pipe(dataParser.definition.pattern.source, replace(/^\^/, ""), replace(/\$$/, ""), (pattern) => `(?:${pattern})`)), exhaustive)), join(""), (pattern) => new RegExp(`^${pattern}$`));
    return dataParserInit(templateLiteralKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            template,
            pattern,
        },
    }, (data, _error, self) => {
        if (typeof data === "string" && self.definition.pattern.test(data)) {
            return data;
        }
        return SymbolDataParserErrorIssue;
    });
}

export { templateLiteral, templateLiteralKind };
