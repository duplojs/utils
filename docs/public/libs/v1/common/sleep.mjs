function sleep(millieSeconde) {
    return new Promise((resolve) => void setTimeout(resolve, millieSeconde));
}

export { sleep };
