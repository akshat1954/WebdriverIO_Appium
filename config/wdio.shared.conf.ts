const { join } = require('path');

export const config: WebdriverIO.Config = {
  
    runner: "local",
    specs: [],
    capabilities: [],
    logLevel: "debug",
    bail: 0,
    baseUrl: "http://www.google.com",
    waitforTimeout: 45000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['image-comparison',
        {
            baselineFolder: join(process.cwd(), './tests/sauceLabsBaseline/'),
            formatImageName: '{tag}-{logName}-{width}x{height}',
            screenshotPath: join(process.cwd(), '.tmp/'),
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            isHybridApp: true,
            tabbableOptions:{
                circle:{
                    size: 18,
                    fontSize: 18,
                    // ...
                },
                line:{
                    color: '#ff221a',
                    width: 3,
                },
            }
        }]],
    framework: "mocha",
    reporters: ["spec"],
    mochaOpts: {
        ui: "bdd",
        timeout: 3 * 60 * 1000, // 3min
    },

};
