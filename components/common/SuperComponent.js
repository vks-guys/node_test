import React, { Component } from 'react';

let count = 0;

class SuperComponent extends Component {
    constructor(props) {
        super(props);

        this.superData = "This is from super component Data";
        this.state = {
            title: "Super Component !"
        }

    };

    async superAlert(title) {
        await this.setState({
            title: title
        })
        count += 1;
        console.log(`SuperComponent _ superAlert ${count}`, this.state.title);
        //alert(message)
    }
    render() {
        console.log("SuperComponent _ render", this.state.title);
        return (
            <div> SuperComponent </div>
        );
    }
}

export default SuperComponent;