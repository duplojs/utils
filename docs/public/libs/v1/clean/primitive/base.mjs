import { createCleanKind } from '../kind.mjs';
import { kindHeritage } from '../../common/kind.mjs';
import { string } from '../../dataParser/parsers/string/index.mjs';
import { number } from '../../dataParser/parsers/number/index.mjs';
import { bigint } from '../../dataParser/parsers/bigint/index.mjs';
import { boolean } from '../../dataParser/parsers/boolean.mjs';
import { date } from '../../dataParser/parsers/date.mjs';
import { time } from '../../dataParser/parsers/time/index.mjs';
import { createErrorKind } from '../../common/errorKindNamespace.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { isRight } from '../../either/right/is.mjs';
import { isLeft } from '../../either/left/is.mjs';
import { left } from '../../either/left/create.mjs';
import { right } from '../../either/right/create.mjs';
import { wrapValue } from '../../common/wrapValue.mjs';

const primitiveHandlerKind = createCleanKind("primitive-handler");
class CreatePrimitiveError extends kindHeritage("create-primitive-error", createErrorKind("create-primitive-error"), Error) {
    data;
    dataParserError;
    constructor(data, dataParserError) {
        super({}, ["Error when create primitive."]);
        this.data = data;
        this.dataParserError = dataParserError;
    }
}
function createPrimitive(dataParser) {
    function create(data) {
        const result = dataParser.parse(data);
        if (isLeft(result)) {
            return left("createPrimitiveError", unwrap(result));
        }
        else {
            return right("createPrimitive", wrapValue(unwrap(result)));
        }
    }
    function createOrThrow(data) {
        const result = create(data);
        if (isLeft(result)) {
            throw new CreatePrimitiveError(data, unwrap(result));
        }
        else {
            return unwrap(result);
        }
    }
    function is(input) {
        const result = dataParser.parse(unwrap(input));
        return isRight(result);
    }
    return primitiveHandlerKind.setTo({
        dataParser,
        create,
        createOrThrow,
        createWithUnknown: create,
        createWithUnknownOrThrow: createOrThrow,
        is,
    });
}
/**
 * {@include clean/String/index.md}
 */
const String = createPrimitive(string());
/**
 * {@include clean/Number/index.md}
 */
const Number = createPrimitive(number());
/**
 * {@include clean/BigInt/index.md}
 */
const BigInt = createPrimitive(bigint());
/**
 * {@include clean/Boolean/index.md}
 */
const Boolean = createPrimitive(boolean());
/**
 * {@include clean/Date/index.md}
 */
const Date = createPrimitive(date());
/**
 * {@include clean/Time/index.md}
 */
const Time = createPrimitive(time());

export { BigInt, Boolean, CreatePrimitiveError, Date, Number, String, Time, primitiveHandlerKind };
