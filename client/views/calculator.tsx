import * as React from 'react';
import {Screen} from "./ScreenComponent";
import {Buttons} from "./ButtonsComponent";
import {observer, Provider} from "mobx-react";
import calculations from '../store/screenStore';

@observer
export default class Calculator extends React.Component<Props, {}> {
    intervalId:any;

    componentDidMount() {
        this.intervalId = setInterval(function () {
            document.getElementById("screen").focus();
        }, 100);
    };
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return (
            <Provider calculations={calculations}>
                <div className="whole">
                    <Screen></Screen>
                    <Buttons></Buttons>
                </div>
            </Provider>
        );
    }
}

interface Props {

}