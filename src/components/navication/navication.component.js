import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as ReactLogo } from './../../assets/crown.svg';

export default function Navication() {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <ReactLogo />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to="/">
                        HOME
                    </Link>

                    <Link className='nav-link' to="/shop">
                        SHOP
                    </Link>

                    <Link className='nav-link' to="/sign-in">
                        SIGN-IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
