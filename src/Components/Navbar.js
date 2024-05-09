import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    const styles = {
        className: ' my-2 text-2xl wide:text-xl block wide:inline font-sans text-black px-3 py-3 hover:underline hover:decoration-2 '
    }
    const links = [
        {
            className: styles.className,
            to: '/',
            name: 'Home'
        }, {
            className: styles.className,
            to: '/Shop',
            name: 'Shop'
        }, {
            className: styles.className,
            to: '/About',
            name: 'About'
        }, {
            className: styles.className,
            to: '/Contact',
            name: 'Contact'
        }
    ]

    return (
        <div> {
            links.map(link => (
                <Link to={
                        link.to
                    }
                    className={
                        link.className
                }>
                    {
                    link.name
                }</Link>
            ))
        } </div>
    )
}

export default Nav;
