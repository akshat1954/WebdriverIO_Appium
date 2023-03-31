import TabBar from '../screenobjects/components/TabBar';
import FormScreen from '../screenobjects/FormsScreen';

describe('HCL Test, when interacting with form elements,', () => {
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


   