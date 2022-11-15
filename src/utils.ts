/**
 * Pause program execution for a certain amount of time.
 * @param milliseconds Time in milliseconds to wait.
 */
export function sleep(milliseconds: number) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}