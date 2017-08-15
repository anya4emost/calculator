import * as React from "react";

export class Actions extends React.Component<Props, {}> {
    render() {
        return (
            <div className="actions">

                <div>/</div>
                <div>*</div>
                <div>+</div>
                <div>-</div>
                <div>%</div>
                <div>=</div>
            </div>
        );
    }
}

interface Props {
}