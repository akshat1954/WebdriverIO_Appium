import TabBar from '../screenobjects/components/TabBar';
import FormScreen from '../screenobjects/FormsScreen';

describe('HCL Test, form elements dropdown picker,', () => {
beforeEach(async () => {
    await TabBar.waitForTabBarShown();
    await TabBar.openForms();
    await FormScreen.waitForIsShown(true);
});

it('color change on the selection of the form tab - using image comparison', async () => {
});

});