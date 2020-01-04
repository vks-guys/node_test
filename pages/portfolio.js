import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
import axios from 'axios';
import '../styles/main.scss';

class PortFolios extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        };
    };

    static async getInitialProps({ query }) {
        console.log(query)
        let post = {};
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
            post = response.data;
        }
        catch (err) {
            console.log(err)
        }
        return {
            post
        }
    }

    render() {
        const { post } = this.props
        console.log(post)
        return (
            <BaseLayout>
                <div className="portfolio">This is from PortFolios pages !</div>
                <p>{post.title}</p>
                <div>{post.body}</div>
            </BaseLayout>
        )
    }
}

export default PortFolios;