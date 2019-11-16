export const logToConsole = function(options = {}, msgPrefix) {
    if (options.withLogging) {
        console.info("----------------------------------------------------");
        for (let i in options) {
            console.info(`${msgPrefix}${i}: ${options[i]}`);
        }
        console.info("----------------------------------------------------");
    }
};