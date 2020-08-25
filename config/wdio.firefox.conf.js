const {config} = require('./wdio.conf');

const browsersSetup = {
    drivers: {
        firefox: {
            version: '0.27.0',
            arch: process.arch,
            baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
        }
    }
};

config.capabilities = [
    {
        browserName: 'firefox',
        maxInstances: 5,

    },
];
config.services =

    [['selenium-standalone', {
        installArgs: browsersSetup,
        args: browsersSetup
    }],

    ];
exports.config = config;