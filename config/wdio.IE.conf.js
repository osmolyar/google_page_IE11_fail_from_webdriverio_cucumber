const {config} = require('./wdio.conf');

const browsersSetup = {drivers: {

        ie: {
            version: '3.9.0',
            arch: 'ia32',
            // - Recent versions of the driver: http://selenium-release.storage.googleapis.com/index.html
            baseURL: 'https://selenium-release.storage.googleapis.com'
        },

    }};


config.capabilities = [
    {
        browserName: 'internet explorer',
        "browserVersion": '11',
        //ignoreProtectedModeSettings: true,    //only applicable to IE browser
        // ignoreZoomSetting: true,              //only applicable to IE browser
        //'ie:ensureCleanSession': true,
        maxInstances: 2,
        timeouts: {"implicit": 5000},
    }

],

    config.services =

        [['selenium-standalone', {
            installArgs: browsersSetup,
            args: browsersSetup
        }],

        ];
exports.config = config;