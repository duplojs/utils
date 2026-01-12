import { isMatch } from './isMatch.mjs';
import { SymbolToolPatternFunctionLabel } from './types/pattern.mjs';

const SymbolToolPatternFunction = Symbol.for(SymbolToolPatternFunctionLabel);
/**
 * {@include pattern/union/index.md}
 */
function union(...patterns) {
    return {
        [SymbolToolPatternFunction]: (input) => {
            for (const pattern of patterns) {
                if (isMatch(input, pattern)) {
                    return true;
                }
            }
            return false;
        },
    };
}

export { union };
