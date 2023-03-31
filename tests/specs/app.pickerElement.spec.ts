import TabBar from '../screenobjects/components/TabBar';
import FormScreen from '../screenobjects/FormsScreen';
import Picker from '../screenobjects/components/Picker';

describe('HCL Test, form elements dropdown picker,', () => {
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