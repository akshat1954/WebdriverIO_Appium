class AndroidSettings {

    async findAndroidElementByText(string: string) {
        const selector = `android=new UiSelector().textContains("${string}")`;

        return $(selector);
    }

    async waitAndTap(string: string) {
        await (await this.findAndroidElementByText(string)).waitForDisplayed();
        await (await this.findAndroidElementByText(string)).click();
    }

   
}

export default new AndroidSettings();
