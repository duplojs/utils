import { createCleanKind } from './kind.mjs';

const evidenceKind = createCleanKind("evidence");
function appendEvidence(...args) {
    if (args.length === 1) {
        const [evidenceName] = args;
        return (input) => appendEvidence(input, evidenceName);
    }
    const [input, evidenceName] = args;
    const evidence = {
        ...(evidenceKind.has(input) && evidenceKind.getValue(input)),
        [evidenceName]: null,
    };
    return evidenceKind.addTo(input, evidence);
}
function hasEvidence(...args) {
    if (args.length === 1) {
        const [evidenceName] = args;
        return (input) => hasEvidence(input, evidenceName);
    }
    const [input, evidenceName] = args;
    if (!evidenceKind.has(input)) {
        return false;
    }
    const formattedEvidenceName = evidenceName instanceof Array
        ? evidenceName
        : [evidenceName];
    const evidence = evidenceKind.getValue(input);
    for (const name of formattedEvidenceName) {
        if (name in evidence) {
            return true;
        }
    }
    return false;
}

export { appendEvidence, evidenceKind, hasEvidence };
