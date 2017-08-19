import {computed, observable} from "mobx";

const isCorrectKey = (key: any) => {
    const arr = ['.', '+', '-', '*', '/'];
    return key >= 0 && key <= 9 || arr.indexOf(key) != -1;
};

export class Calculations {
    @observable screen: string = '';

    @computed
    get displayedScreen() {
        return this.screen || '0';
    }

    enterTheNumber = (param: string) => {
        if (this.screen == "0" && param == '.') {
            this.screen = "0" + param;
            return
        }
        if (this.screen == "0") {
            this.screen = param;
            return
        }
        this.screen += param;
    };

    manualInput = (event: any) => {

        if (!isCorrectKey(event.key)) {
            return;
        }

        if (
            ( this.screen.search(/\./) == -1){
            if (this.screen == "0" && event.key == '.') {
                this.screen += event.key;
                return
            }
            if (this.screen == "0") {
                this.screen = event.key;
                return
            }
            this.screen += event.key.toString();

        }
        if (event.key == "=" || event.keyCode == 13) {
            this.toCalculate();
        }
        if (event.keyCode == 8) {
            this.screen = this.screen.slice(0, -1);
            if (this.screen.length == 0) {
                this.screen = "0"
            }
        }
        console.log(this.screen.search(/\./));
    };

    reset = () => {
        this.screen = "0";
    };
    toCalculate = () => {
        this.screen = eval(this.screen);
    }
}

export default new Calculations();