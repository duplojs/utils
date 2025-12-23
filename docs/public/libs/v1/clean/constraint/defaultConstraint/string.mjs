import { createConstraint } from '../base.mjs';
import { String } from '../../primitive/base.mjs';
import { checkerEmail } from '../../../dataParser/parsers/string/checkers/email.mjs';
import { checkerUrl } from '../../../dataParser/parsers/string/checkers/url.mjs';

const Email = createConstraint("email", String, checkerEmail());
const Url = createConstraint("url", String, checkerUrl());

export { Email, Url };
