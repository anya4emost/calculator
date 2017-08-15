import * as React from "react";
import {inject} from "mobx-react";
import {Calculations} from "../store/screenStore";

@inject("calculations")
export class Screen extends React.Component<Props, {}> {
    render() {
        return (
            <div className="screen">
                {this.props.calculations.screen}
            </div>
        );
    }
}

interface Props {
    calculations?: Calculations;
}