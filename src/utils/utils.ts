/**
 * used for testing purposes only
 * @param ms number of milliseconds to wait
 */
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));