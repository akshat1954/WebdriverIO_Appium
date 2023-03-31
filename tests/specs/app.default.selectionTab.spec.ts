import TabBar from '../screenobjects/components/TabBar';
import HomeScreen from '../screenobjects/HomeScreen';

describe('HCL Test, when opening app,', () => {

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    it('default tab selection should be home', async () => {
        expect(await HomeScreen.checkForDefaultTabSelected()).toStrictEqual(true)
    });

});
