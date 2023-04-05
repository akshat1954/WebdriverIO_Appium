const imageToBase64 = require('image-to-base64');

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
        /*
        a.src = './screenshots/ssBefore.png';
        b.src = './screenshots/ssAfter.png';
        var a_base64 = getBase64Image(a);
        var b_base64 = getBase64Image(b);
        if (a_base64 === b_base64)
        {
            return true
        }
        else{ return false}
        {
        }*/

        let a = imageToBase64('./screenshots/ssBefore.png')
        let b = imageToBase64('./screenshots/ssAfter.png')
        return a === b
        
    }
}
