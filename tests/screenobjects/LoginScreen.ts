import AppScreen from './AppScreen';
import Gestures from '../helpers/Gestures';

class LoginScreen extends AppScreen {
    constructor () {
        super('~Login-screen');
    }

    private get loginContainerButton () {return $('~button-login-container');}
    private get loginButton () {return $('~button-LOGIN');}
    private get email () {return $('~input-email');}
    private get password () {return $('~input-password');}

    async tapOnLoginContainerButton(){
        await this.loginContainerButton.click();
    }

    async submitLoginForm({ username, password }:{username:string; password:string;}) {
        await this.email.setValue(username);
        await this.password.setValue(password);

        if (await driver.isKeyboardShown()) {
            await $('~Login-screen').click();
        }
        await Gestures.checkIfDisplayedWithSwipeUp(await this.loginButton, 2);
        await this.loginButton.click();
    }
}

export default new LoginScreen();
