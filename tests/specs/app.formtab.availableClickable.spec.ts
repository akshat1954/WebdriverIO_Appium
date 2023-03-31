import TabBar from '../screenobjects/components/TabBar';
import HomeScreen from '../screenobjects/HomeScreen';

describe('HCL Test, when opening form,', () => {

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