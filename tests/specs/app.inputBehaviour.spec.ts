import TabBar from '../screenobjects/components/TabBar';
import FormScreen from '../screenobjects/FormsScreen';

describe('HCL Test, when input in forms,', () => {

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

