import AppScreen from './AppScreen';

class FormsScreen extends AppScreen {
    constructor () {
        super('~Forms-screen');
    }

    get input () {return $('~text-input');}
    get inputTextResult () {return $('~input-text-result');}
    private get switch () {return $('~switch');}
    private get dropDown () {return $('~Dropdown');}
    get activeButton () {return $('~button-Active');}
    get inActiveButton () {return $('~button-Inactive');}

    async tapOnInputTextResult(){
        await this.inputTextResult.click();
    }

    async tapOnSwitch(){
        await this.switch.click();
    }

    async tapOnDropDown(){
        await this.dropDown.click();
    }

    async tapOnActiveButton(){
        await this.activeButton.click();
    }

    async tapOnInActiveButton(){
        await this.inActiveButton.click();
    }

    async isSwitchActive ():Promise<boolean> {
        const active = driver.isAndroid ? 'ON' : '1';

        return (await this.switch.getText()).includes(active);
    }

  
    async getDropDownText ():Promise<string> {
      
        let selector;

        if (driver.isAndroid) {
            selector ='//*[@content-desc="Dropdown"]/*/android.widget.EditText';
        } else {
            selector = '-ios class chain:**/*[`name == "Dropdown"`]/**/*[`name == "text_input"`]';
        }

        return $(selector).getText();
    }

    async getDropDownElementBoundsValue():Promise<string> { 
        let selector; 
        let boundValue;
        selector = '//*[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]';
        boundValue = await $(selector).getAttribute('bounds')
        console.log("&&& >",boundValue)
        return boundValue;
    }
}

export default new FormsScreen();
