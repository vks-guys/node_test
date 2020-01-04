import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/common/SuperComponent';
//import React, { Component } from 'react';

class Index extends SuperComponent {
    constructor() {
        super();
        this.state = {
            title: "Button not clicked !"
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    async changeButtonTitle() {
        debugger;
        await this.setState({ title: "Button has been clicked !" })
        this.superAlert(this.state.title)
    }

    render() {
        console.log("render")
        return (
            <BaseLayout>
                <div>Hi, Vivek! <br />This is Index Pages !</div>
                <h3>{this.state.title}</h3>
                <button onClick={() => this.changeButtonTitle()} >Change !</button>
            </BaseLayout>
        )
    }
}

export default Index;