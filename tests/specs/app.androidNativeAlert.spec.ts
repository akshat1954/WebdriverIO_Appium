import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';
import FormScreen from '../screenobjects/FormsScreen';
import Picker from '../screenobjects/components/Picker';
import Gestures from '../helpers/Gestures';
import HomeScreen from '../screenobjects/HomeScreen';

describe('native alerts on a login form,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it('android native alerts are functional', async () => {
        await LoginScreen.tapOnLoginContainerButton();
        await LoginScreen.submitLoginForm({ username: 'akshat@webdriver.io', password: 'Akshat2023' });
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Success\nYou are logged in!');
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });
});

describe('form elements dropdown picker,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);
    });
    
it('all options from picker elements are visible within the screen - using bounds', async () => {
    await FormScreen.tapOnDropDown();
    expect(await FormScreen.getDropDownElementBoundsValue()).toStrictEqual('[93,834][1347,1642]')
    });

});

describe('form elements dropdown picker,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);
    });
    
    
it('picker element is working and it has 3 options to choose from', async () => {
    const valueOne = 'This app is awesome';
    const valueTwo = 'webdriver.io is awesome';
    const valueThree = 'Appium is awesome';

    await FormScreen.tapOnDropDown();
    await Picker.selectValue(valueOne);
    await expect(await FormScreen.getDropDownText()).toContain(valueOne);

    await FormScreen.tapOnDropDown();
    await Picker.selectValue(valueTwo);
    await expect(await FormScreen.getDropDownText()).toContain(valueTwo);

    await FormScreen.tapOnDropDown();
    await Picker.selectValue(valueThree);
    await expect(await FormScreen.getDropDownText()).toContain(valueThree);
});

});


describe('when input in forms,', () => {

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);
    });

    it('should be able type in the input and validate the text', async () => {
        const text = 'to verify text input';
        await FormScreen.input.setValue(text);
        await expect(FormScreen.inputTextResult).toHaveTextContaining(text);
    });
});

describe('when interacting with form elements,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);
    });

    it('Validate that Inactive button is not interactable', async () => {
        await Gestures.checkIfDisplayedWithSwipeUp(await FormScreen.inActiveButton, 2);
        await NativeAlert.waitForIsShown(false);
        await FormScreen.tapOnInActiveButton();
        await driver.pause(1000);
        await NativeAlert.waitForIsShown(false);
    });

});

describe('when opening form,', () => {

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    it('form tab is available for selection', async () => {
        expect(await HomeScreen.isFormTabSelectable()).toStrictEqual(true)
    });

    it('form tab is clickable', async () => {
        expect(await HomeScreen.isFormTabClickable()).toStrictEqual("true")
    });

});


describe('when opening app,', () => {

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    it('default tab selection should be home', async () => {
        expect(await HomeScreen.checkForDefaultTabSelected()).toStrictEqual(true)
    });

});

describe('form elements dropdown picker,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);
    });
    
    it('color change on the selection of the form tab - using image comparison', async () => {
    });
    
    });

    describe('when interacting with form elements,', () => {
        beforeEach(async () => {
            await TabBar.waitForTabBarShown();
            await TabBar.openForms();
            await FormScreen.waitForIsShown(true);
        });
    
        it('keyboard is available to provide input in the text', async () => {
            const text = 'keyboard availability check';
            await FormScreen.input.click();
            expect(await driver.isKeyboardShown()).toStrictEqual(true);
            await FormScreen.input.setValue(text);
            await expect(FormScreen.inputTextResult).toHaveTextContaining(text);
            if (await driver.isKeyboardShown()) {
                await FormScreen.tapOnInputTextResult();
            }
        });
    });
    
