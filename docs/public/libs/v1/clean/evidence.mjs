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

export { appendEvidence, evidenceKind };
