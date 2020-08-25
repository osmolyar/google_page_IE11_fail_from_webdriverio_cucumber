const {config} = require('./wdio.conf');

config.capabilities = [
        {
            browserName: 'chrome',
            maxInstances: 5,
            'goog:chromeOptions': {
                args: [
                    '--disable-infobars',
                    '--window-size=1900,1400',
                    '--headless',
                    '--no-sandbox',
                    '--disable-gpu',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                ],
            },
            
        },
];
exports.config = config;