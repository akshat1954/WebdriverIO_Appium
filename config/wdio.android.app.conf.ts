import { join } from 'path';
import config from './wdio.shared.local.appium.conf';

config.specs = [
    //'./tests/specs/**/app*.spec.ts',
    './tests/specs/**/app.default.selectionTab.spec.ts',
    './tests/specs/**/app.formtab.availableClickable.spec.ts',
    './tests/specs/**/app.inputBehaviour.spec.ts',
    './tests/specs/**/app.keyboardAvailable.spec.ts',
    './tests/specs/**/app.androidNativeAlert.spec.ts',
    './tests/specs/**/app.inactiveButton.spec.ts',
    './tests/specs/**/app.pickerElement.spec.ts',
    './tests/specs/**/app.pickerElementsVisible.spec.ts',
    './tests/specs/**/app.colorOnFormTab.spec.ts',
];

config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Pixel_XL_API_31',
        'appium:platformVersion': '12.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
