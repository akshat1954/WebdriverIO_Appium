import TabBar from '../screenobjects/components/TabBar';
import FormScreen from '../screenobjects/FormsScreen';

describe('HCL Test, form elements dropdown picker,', () => {
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