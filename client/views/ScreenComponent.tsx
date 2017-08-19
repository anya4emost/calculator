import * as React from "react";
import {inject, observer} from "mobx-react";
import {Calculations} from "../store/screenStore";

@inject("calculations")
@observer
export class Screen extends React.Component<Props, {}> {
    render() {
        return (
            <input id="screen" className="screen" value={this.props.calculations.displayedScreen} onKeyUp={this.props.calculations.manualInput}>
            </input>
        );
    }
}

interface Props {
    calculations?: Calculations;
}