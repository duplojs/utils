import { createConstraint } from '../base.mjs';
import { String } from '../../primitive/base.mjs';
import { checkerEmail } from '../../../dataParser/parsers/string/checkers/email.mjs';
import { checkerUuid } from '../../../dataParser/parsers/string/checkers/uuid.mjs';
import { checkerUrl } from '../../../dataParser/parsers/string/checkers/url.mjs';
import { checkerStringMin } from '../../../dataParser/parsers/string/checkers/min.mjs';
import { checkerStringMax } from '../../../dataParser/parsers/string/checkers/max.mjs';
import { checkerRegex } from '../../../dataParser/parsers/string/checkers/regex.mjs';

/**
 * {@include clean/Email/index.md}
 */
const Email = createConstraint("email", String, checkerEmail());
const Uuid = createConstraint("uuid", String, checkerUuid());
/**
 * {@include clean/Url/index.md}
 */
const Url = createConstraint("url", String, checkerUrl());
/**
 * {@include clean/StringMin/index.md}
 */
function StringMin(value) {
    return createConstraint(`string-min-${value}`, String, checkerStringMin(value));
}
/**
 * {@include clean/StringMax/index.md}
 */
function StringMax(value) {
    return createConstraint(`string-max-${value}`, String, checkerStringMax(value));
}
/**
 * {@include clean/NoBlank/index.md}
 */
const NoBlank = createConstraint("no-blank", String, checkerRegex(/^\S+$/));

export { Email, NoBlank, StringMax, StringMin, Url, Uuid };
