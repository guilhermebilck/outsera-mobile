exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '11',
        'appium:deviceName': 'nightwatch-android-11',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'io.appium.android.apis',
        'appium:appActivity': '.ApiDemos',
        'appium:udid': 'emulator-5554',
        'appium:app': '/home/bilck/workspace/android-apidemos/apks/ApiDemos-debug.apk'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryCount: 3,
    connectionRetryTimeout: 90000,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};
