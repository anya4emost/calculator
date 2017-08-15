import * as React from "react";
import {Digits} from "./DigitsComponent";
import {Actions} from "./ActionsComponent";

export class Buttons extends React.Component<Props, {}> {
    render() {
        return (
            <div className="buttons">
                <Digits/>
                <Actions/>
            </div>
        );
    }
}

interface Props {
}