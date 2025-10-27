import { escapeRegExp } from '../../common/escapeRegExp.mjs';
import { createKind } from '../../common/kind.mjs';
import { pipe } from '../../common/pipe.mjs';
import { innerPipe } from '../../common/innerPipe.mjs';
import { when as when$1 } from '../../common/when.mjs';
import { isType } from '../../common/isType.mjs';
import { whenElse } from '../../common/whenElse.mjs';
import { map } from '../../array/map.mjs';
import { join } from '../../array/join.mjs';
import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import '../../pattern/result.mjs';
import { exhaustive } from '../../pattern/exhaustive.mjs';
import { when } from '../../pattern/when.mjs';
import { replace } from '../../string/replace.mjs';
import { dataParserStringKind } from './string/index.mjs';
import { dataParserNumberKind } from './number/index.mjs';
import { dataParserBigIntKind } from './bigint/index.mjs';
import { dataParserLiteralKind } from './literal.mjs';
import { dataParserEmptyKind } from './empty.mjs';
import { dataParserNilKind } from './nil.mjs';
import { dataParserBooleanKind } from './boolean.mjs';

const dataParserTemplateLiteralKind = createKind("data-parser-template-literal");
function templateLiteral(template, definition) {
    const pattern = pipe(template, map(innerPipe(when(isType("string"), (value) => `(?:${escapeRegExp(value)})`), when(dataParserNumberKind.has, () => "(:?[0-9]+)"), when(dataParserBigIntKind.has, () => "(?:[0-9]+n)"), when(dataParserBooleanKind.has, () => "(?:true|false)"), when(dataParserNilKind.has, () => "(?:null)"), when(dataParserEmptyKind.has, () => "(?:undefined)"), when(dataParserLiteralKind.has, (dataParser) => pipe(dataParser.definition.value, map(innerPipe(when$1(isType("bigint"), (value) => `${value}n`), String, escapeRegExp)), join("|"), (pattern) => `(?:${pattern})`)), when(dataParserStringKind.has, innerPipe(whenElse((dataParser) => !!dataParser.definition.checkers.length, (dataParser) => pipe(dataParser.definition.checkers, map((element) => pipe(element.definition.pattern.source, replace(/^\^/, ""), replace(/\$$/, ""))), join("")), () => "(?:[^]*)"))), when(dataParserTemplateLiteralKind.has, (dataParser) => pipe(dataParser.definition.pattern.source, replace(/^\^/, ""), replace(/\$$/, ""), (pattern) => `(?:${pattern})`)), exhaustive)), join(""), (pattern) => new RegExp(`^${pattern}$`));
    return dataParserInit(dataParserTemplateLiteralKind, {
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

export { dataParserTemplateLiteralKind, templateLiteral };
