import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import '../styles/main.scss';

class Blogs extends React.Component {
    render() {
        return (
            <BaseLayout>
                <div className="blog">This is from Blog pages !</div>
            </BaseLayout>
        )
    }
}

export default Blogs;