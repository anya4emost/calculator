import * as React from "react";

export class Digits extends React.Component<Props, {}> {
    render() {
        return (
            <div className="digits">
                <div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </div>
                <div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
                <div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div>
                    <div>0</div>
                    <div>.</div>
                    <div className="ac">AC</div>
                </div>
            </div>
        );
    }
}

interface Props {
}