const {config} = require('./wdio.conf');

// const browsersSetup = {
//     drivers: {
//         MicrosoftEdge: {version: '84.0.522.52'},
//         arch: process.arch,
//         // - Recent versions of the driver: https://sites.google.com/a/chromium.org/chromedriver/
//         baseURL: 'https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/'
//     },
// };

config.capabilities = [
    {
        browserName: 'MicrosoftEdge',
        browserVersion: '84.0.522.52',
        maxInstances: 5,
        path: '/'

    },
];
config.services =

    [['selenium-standalone',
    //     {
    //     installArgs: browsersSetup,
    //     args: browsersSetup
    // }
    ],
    ];
exports.config = config;