import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore from '../store';

class MyApp extends App {

    static async getInitialProps(data) {
        //{ Component, ctx }
        let pageProps = {};
        if (data.Component.getInitialProps) {
            console.log("data.", data, data.Component.getInitialProps)
            pageProps = await data.Component.getInitialProps(data.ctx);
            console.log("pageProps", pageProps)
        }
        return { pageProps };
    }

    render() {
        console.log("this.props", this.props)
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);