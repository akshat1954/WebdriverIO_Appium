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
}