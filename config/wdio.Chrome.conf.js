const {config} = require('./wdio.conf');

const browsersSetup = {
    drivers: {
        chrome: {version: '84.0.4147.89'},
        arch: process.arch,
        // - Recent versions of the driver: https://sites.google.com/a/chromium.org/chromedriver/
        baseURL: 'https://chromedriver.storage.googleapis.com'
    },
};

config.capabilities = [
    {
        browserName: 'chrome',
        maxInstances: 5,
        'moz:firefoxOptions': {
            args: [
                '--disable-infobars',
                '--window-size=1900,1400',
                '--no-sandbox',
                '--disable-gpu',
              //  '--headless',
                //'--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
            ],
        },

    },
];
config.services =

    [['selenium-standalone', {
        installArgs: browsersSetup,
        args: browsersSetup
    }],

    ];
exports.config = config;