import * as React from "react";
import {inject, observer} from "mobx-react";
import {Calculations} from "../store/screenStore";

@inject("calculations")
@observer
export class Screen extends React.Component<Props, {}> {
    render() {
        return (
            <div className="display">
                <span className="previous_calculations">{this.props.calculations.previousCalculations}</span>
                <input id="screen" className="screen" value={this.props.calculations.displayedScreen}
                       onKeyUp={this.props.calculations.manualInput}>
                </input>
            </div>
        );
    }
}

interface Props {
    calculations?: Calculations;
}