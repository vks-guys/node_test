import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
    render() {
        console.log("Headers")
        return (
            <React.Fragment>
                <div>
                    <Link href="/">
                        <a> Home </a>
                    </Link> ||
                        <Link href="/cv">
                        <a> CV </a>
                    </Link> ||
                        <Link href="/blog">
                        <a> Blog </a>
                    </Link> ||
                        <Link href="/portfolios">
                        <a> Portfolios </a>
                    </Link> ||
                        <Link href="/test">
                        <a> test </a>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;