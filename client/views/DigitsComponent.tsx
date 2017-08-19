import * as React from "react";
import {inject} from "mobx-react";
import {Calculations} from "../store/screenStore";

@inject("calculations")

export class Digits extends React.Component<Props, {}> {
    render() {
        return (
            <div className="digits">
                <div>
                    <div onClick={() => this.props.calculations.enterTheNumber("7")}>7</div>
                    <div onClick={() => this.props.calculations.enterTheNumber("8")}>8</div>
                    <div onClick={() => this.props.calculations.enterTheNumber("9")}>9</div>
                </div>
                <div>
                    <div onClick={() => this.props.calculations.enterTheNumber("4")}>4</div>
                    <div onClick={() => this.props.calculations.enterTheNumber("5")}>5</div>
                    <div onClick={() => this.props.calculations.enterTheNumber("6")}>6</div>
                </div>
                <div>
                    <div onClick={() => this.props.calculations.enterTheNumber("1")}>1</div>
                    <div onClick={() => this.props.calculations.enterTheNumber("2")}>2</div>
                    <div onClick={() => this.props.calculations.enterTheNumber("3")}>3</div>
                </div>
                <div>
                    <div onClick={() => this.props.calculations.enterTheNumber("0")}>0</div>
                    <div onClick={() => this.props.calculations.enterTheNumber(".")}>.</div>
                    <div onClick={this.props.calculations.reset} className="ac">AC</div>
                </div>
            </div>
        );
    }
}

interface Props {
    calculations?: Calculations;

}