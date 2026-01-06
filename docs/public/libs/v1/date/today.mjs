/**
 * {@include date/today/index.md}
 */
function today() {
    const timestamp = new Date().setUTCHours(0, 0, 0, 0);
    return `date${timestamp}+`;
}

export { today };
