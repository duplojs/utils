import { createConstraint } from '../base.mjs';
import { String } from '../../primitive/base.mjs';
import { checkerEmail } from '../../../dataParser/parsers/string/checkers/email.mjs';
import { checkerUrl } from '../../../dataParser/parsers/string/checkers/url.mjs';

/**
 * {@include clean/Email/index.md}
 */
const Email = createConstraint("email", String, checkerEmail());
/**
 * {@include clean/Url/index.md}
 */
const Url = createConstraint("url", String, checkerUrl());

export { Email, Url };
