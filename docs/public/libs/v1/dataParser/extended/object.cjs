'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var index = require('../parsers/object/index.cjs');
var omit = require('../parsers/object/omit.cjs');
var pick = require('../parsers/object/pick.cjs');
var _extends = require('../parsers/object/extends.cjs');
var partial = require('../parsers/object/partial.cjs');
var required = require('../parsers/object/required.cjs');

class DataParserObjectExtended extends base.DataParserBaseExtended.initExtended(index.DataParserObject) {
    get classConstructor() {
        return this.checkConstructor(DataParserObjectExtended);
    }
    /**
     * {@include dataParser/extended/object/omit/index.md}
     */
    omit(omitObject, definition) {
        return object(omit.omitShape(this.definition.shape, omitObject), definition);
    }
    /**
     * {@include dataParser/extended/object/pick/index.md}
     */
    pick(pickObject, definition) {
        return object(pick.pickShape(this.definition.shape, pickObject), definition);
    }
    /**
     * {@include dataParser/extended/object/extends/index.md}
     */
    extends(extension, definition) {
        return object(_extends.extendsShape(this.definition.shape, extension), definition);
    }
    /**
     * {@include dataParser/extended/object/partial/index.md}
     */
    partial(definition) {
        return object(partial.partialShape(this.definition.shape), definition);
    }
    /**
     * {@include dataParser/extended/object/required/index.md}
     */
    required(definition) {
        return object(required.requiredShape(this.definition.shape), definition);
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
const object = detachObjectMethod.detachObjectMethod(DataParserObjectExtended, "create");

exports.DataParserObjectExtended = DataParserObjectExtended;
exports.object = object;
