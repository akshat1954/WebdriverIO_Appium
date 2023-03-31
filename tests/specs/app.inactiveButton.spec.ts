import Gestures from '../helpers/Gestures';
import TabBar from '../screenobjects/components/TabBar';
import FormScreen from '../screenobjects/FormsScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';

describe('HCL Test, when interacting with form elements,', () => {
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