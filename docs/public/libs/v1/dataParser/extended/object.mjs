import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserObject } from '../parsers/object/index.mjs';
import { omitShape } from '../parsers/object/omit.mjs';
import { pickShape } from '../parsers/object/pick.mjs';
import { extendsShape } from '../parsers/object/extends.mjs';
import { partialShape } from '../parsers/object/partial.mjs';
import { requiredShape } from '../parsers/object/required.mjs';

class DataParserObjectExtended extends DataParserBaseExtended.initExtended(DataParserObject) {
    get classConstructor() {
        return this.checkConstructor(DataParserObjectExtended);
    }
    /**
     * {@include dataParser/extended/object/omit/index.md}
     */
    omit(omitObject, definition) {
        return object(omitShape(this.definition.shape, omitObject), definition);
    }
    /**
     * {@include dataParser/extended/object/pick/index.md}
     */
    pick(pickObject, definition) {
        return object(pickShape(this.definition.shape, pickObject), definition);
    }
    /**
     * {@include dataParser/extended/object/extends/index.md}
     */
    extends(extension, definition) {
        return object(extendsShape(this.definition.shape, extension), definition);
    }
    /**
     * {@include dataParser/extended/object/partial/index.md}
     */
    partial(definition) {
        return object(partialShape(this.definition.shape), definition);
    }
    /**
     * {@include dataParser/extended/object/required/index.md}
     */
    required(definition) {
        return object(requiredShape(this.definition.shape), definition);
    }
    /**
     * {@include dataParser/extended/object/index.md}
     */
    static create(shape, definition) {
        return new DataParserObjectExtended(this.prepareDefinition(shape, definition));
    }
}
/**
 * {@include dataParser/extended/object/index.md}
 */
const object = detachObjectMethod(DataParserObjectExtended, "create");

export { DataParserObjectExtended, object };
