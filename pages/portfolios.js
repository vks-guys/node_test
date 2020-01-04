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

    static async getInitialProps() {
        let posts = []
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            posts = response.data.splice(0, 10)
        }
        catch (err) {
            console.log(err)
        }
        return {
            posts
        }
    }

    render() {
        const { posts } = this.props
        console.log(posts.length)
        return (
            <BaseLayout>
                <div className="portfolio">This is from PortFolios pages !</div>
                <ul>
                    {posts.map((item, index) => {
                        return <li key={index}><Link href={`/p/${item.id}`}><a>{item.title}</a></Link></li>
                    })}
                </ul>
            </BaseLayout>
        )
    }
}

export default PortFolios;