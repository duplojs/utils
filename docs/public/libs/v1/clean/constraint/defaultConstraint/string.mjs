import { createConstraint } from '../base.mjs';
import { String } from '../../primitive/base.mjs';
import { checkerEmail } from '../../../dataParser/parsers/string/checkers/email.mjs';
import { checkerUrl } from '../../../dataParser/parsers/string/checkers/url.mjs';
import { checkerStringMin } from '../../../dataParser/parsers/string/checkers/min.mjs';
import { checkerStringMax } from '../../../dataParser/parsers/string/checkers/max.mjs';

/**
 * {@include clean/Email/index.md}
 */
const Email = createConstraint("email", String, checkerEmail());
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

export { Email, StringMax, StringMin, Url };
