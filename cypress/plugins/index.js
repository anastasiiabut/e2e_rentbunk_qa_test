module.exports = on => {
    // Current plugin prevents running out of shared memory
    on('before:browser:launch', (browser = {}, launchOptions) => {
        if(browser.name ==='chrome') {
            launchOptions.args.push('--disable-dev-shm-usage');
            return launchOptions;
        }
    });
};
