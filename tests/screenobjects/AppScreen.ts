export default class AppScreen {
    private selector: string;

    constructor (selector: string) {
        this.selector = selector;
    }

    async waitForIsShown (isShown = true): Promise<boolean | void> {
        return $(this.selector).waitForDisplayed({
            reverse: !isShown,
        });
    }

    async checkForDefaultTabSelected(){
        let bool = await $('~Home').isSelected();
        return bool;
    };

    async isFormTabSelectable() {
        console.log("###", await $('~Forms').isEnabled());
        return await $('~Forms').isEnabled();
    }

    async isFormTabClickable() {
        return await $('~Forms').getAttribute("clickable")
    }

    async compareImage():Promise<Object>{
        
        //const ele = await driver.getElementCSSValue('~Forms','background-color')
        //const elem = await $('~Forms')
        //const color = await elem.getCSSProperty('color')
        //console.log(">>> ",(await $('~Forms').getCSSProperty("background-color")).value)
        //await driver.checkFullPageScreen('fullPage')
        //expect(await driver.checkElement(ele,'firstButtonElement')).toEqual(0);
        //driver.saveScreen('');

        /*await browser.checkFullPageScreen('fullPage', {
            hideAfterFirstScroll: [await $('~Forms')],
        });*/

        return true
    }
}
