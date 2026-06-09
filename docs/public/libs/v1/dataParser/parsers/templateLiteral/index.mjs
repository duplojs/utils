import { createDataParserKind } from '../../kind.mjs';
import { DataParserBase } from '../../base.mjs';
import { addIssue } from '../../error.mjs';
import { createTemplateLiteralPattern } from './createTemplateLiteralPattern.mjs';
import { detachObjectMethod } from '../../../common/detachObjectMethod.mjs';
import { pipe } from '../../../common/pipe.mjs';

const templateLiteralKind = createDataParserKind("template-literal");
class DataParserTemplateLiteral extends DataParserBase.init(templateLiteralKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserTemplateLiteral);
    }
    static execParse(self, data, error) {
        if (typeof data === "string" && self.definition.pattern.test(data)) {
            return data;
        }
        return addIssue(error, `string matching template literal pattern ${self.definition.pattern.source}`, data, self.definition.errorMessage);
    }
    static dataParserIsAsynchronous(self) {
        return false;
    }
    static prepareDefinition(template, definition) {
        const pattern = pipe(createTemplateLiteralPattern(template), (result) => new RegExp(`^${result}$`));
        return {
            ...definition,
            template,
            pattern,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/templateLiteral/index.md}
     */
    static create(template, definition) {
        return new DataParserTemplateLiteral(this.prepareDefinition(template, definition));
    }
}
const templateLiteral = detachObjectMethod(DataParserTemplateLiteral, "create");

export { DataParserTemplateLiteral, createTemplateLiteralPattern, templateLiteral, templateLiteralKind };
