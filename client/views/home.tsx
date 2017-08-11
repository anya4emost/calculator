import * as React from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
export default class Home extends React.Component<Props, {}> {

  @observable name: string = "Kitty";

    clickHandler = () => {
        this.name = "Bunny";
    };

    render() {
        return (
            <h1 onClick={this.clickHandler}>
                {`Hello ${this.name}!`}
            </h1>
        );
    }
}

interface Props {

}