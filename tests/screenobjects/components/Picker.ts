const SELECTORS = {
    ANDROID_LISTVIEW: '//android.widget.ListView',
    IOS_PICKERWHEEL: '-ios predicate string:type == \'XCUIElementTypePickerWheel\'',
    DONE: '~done_button',
};

class Picker {

    static async waitForIsShown (isShown = true) {
        const selector = driver.isIOS ? SELECTORS.IOS_PICKERWHEEL : SELECTORS.ANDROID_LISTVIEW;
        await $(selector).waitForExist({
            timeout: 11000,
            reverse: !isShown,
        });
    }

static async selectValue (value:string) {
        await this.waitForIsShown(true);
        if (driver.isIOS) {
            await this.setIOSValue(value);
        } else {
            await this.setAndroidValue(value);
        }
        await this.waitForIsShown(false);
    }

   
private static async setAndroidValue (value:string) {
        await $(`${SELECTORS.ANDROID_LISTVIEW}/*[@text='${value}']`).click();
    }

private static async setIOSValue (value: string) {
        await $(SELECTORS.IOS_PICKERWHEEL).addValue(value);
        await $(SELECTORS.DONE).click();
    }
}

export default Picker;
