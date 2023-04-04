import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';
import FormScreen from '../screenobjects/FormsScreen';
import Picker from '../screenobjects/components/Picker';
import Gestures from '../helpers/Gestures';
import HomeScreen from '../screenobjects/HomeScreen';

describe('native alerts on a login form,', () => {
    beforeEach(async () => {
        driver.startActivity("com.wdiodemoapp","com.wdiodemoapp.MainActivity")
        await TabBar.waitForTabBarShown();
       
    });

    it('color change on the selection of the form tab - using image comparison', async () => {
        await driver.saveScreenshot('./screenshots/ssBefore.png')
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);
        await driver.saveScreenshot('./screenshots/ssAfter.png')
        
        await HomeScreen.compareImage()
    });

    it('android native alerts are functional', async () => {
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
        await LoginScreen.tapOnLoginContainerButton();
        await LoginScreen.submitLoginForm({ username: 'akshat@webdriver.io', password: 'Akshat2023' });
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Success\nYou are logged in!');
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });

    it('all options from picker elements are visible within the screen - using bounds', async () => {
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);
        await FormScreen.tapOnDropDown();
        expect(await FormScreen.getDropDownElementBoundsValue()).toStrictEqual('[93,834][1347,1642]')
        });

    it('picker element is working and it has 3 options to choose from', async () => {
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);

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

    it('should be able type in the input and validate the text', async () => {
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);
        const text = 'to verify text input';
        await FormScreen.input.setValue(text);
        await expect(FormScreen.inputTextResult).toHaveTextContaining(text);
    });


    it('Validate that Inactive button is not interactable', async () => {
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);
        await Gestures.checkIfDisplayedWithSwipeUp(await FormScreen.inActiveButton, 2);
        await NativeAlert.waitForIsShown(false);
        await FormScreen.tapOnInActiveButton();
        await NativeAlert.waitForIsShown(false);
    });

    it('form tab is available for selection and clickable', async () => {
        expect(await HomeScreen.isFormTabSelectable()).toStrictEqual(true)
        expect(await HomeScreen.isFormTabClickable()).toStrictEqual("true")
    });

    it('default tab selection should be home', async () => {
        expect(await HomeScreen.checkForDefaultTabSelected()).toStrictEqual(true)
    });

   

    it('keyboard is available to provide input in the text', async () => {
        await TabBar.openForms();
        await FormScreen.waitForIsShown(true);
        const text = 'keyboard availability check';
        await FormScreen.input.click();
        expect(await driver.isKeyboardShown()).toStrictEqual(true);
        await FormScreen.input.setValue(text);
        await expect(FormScreen.inputTextResult).toHaveTextContaining(text);
        if (await driver.isKeyboardShown()) {
            await FormScreen.tapOnInputTextResult();
        }
    });

    afterEach(async () => {
        await driver.closeApp()
    })
    
});




        
