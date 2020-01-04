import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import '../styles/main.scss';

class Cv extends React.Component {
    render() {
        return (
            <BaseLayout>
                <div className="cv">This is from CV pages !</div>
            </BaseLayout>
        )
    }
}

export default Cv;