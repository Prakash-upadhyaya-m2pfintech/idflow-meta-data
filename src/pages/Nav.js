import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';
// import meta_image from '../assets/image/react.png'
import './nav.css'
import homeImage from '../image/react.png';
import contactImage from '../image/react_1.png';
import catImage from '../image/cat.jpeg'


export const Home = () => {
    const pageTitle = 'Home Page';
    const pageDescription = 'Welcome to our website!';
    return <>
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta property="og:image" content={homeImage} />
            <meta property='og:image:width' content='200' />
            <meta property='og:image:height' content='200' />
        </Helmet>

        <h1>Home</h1>
    </>
}
export const Contact = () => {
    const pageTitle = 'Contact Page';
    const pageDescription = 'Contact us at www.example.com !';
    return <>
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta property="og:image" content={contactImage} />
            <meta property='og:image:width' content='200' />
            <meta property='og:image:height' content='200' />
        </Helmet>
        <h1>Contact</h1></>
}

export const Help = () => {
    return <h1>Help</h1>
}
export const User = () => {
    return <h1>User</h1>
}

function Nav() {
    const routes = useLocation();
    const currentPath = routes?.pathname;
    const id = 123;
    let meta_images = '';
    let pageTitle, pageDescription;

    if (currentPath === '/') {
        pageTitle = 'Home Page';
        pageDescription = 'Welcome to our website!';
        meta_images = homeImage;
    }
    else if (currentPath === '/contact') {
        pageTitle = 'Contact Page';
        pageDescription = 'Contact us at www.example.com !';
        meta_images = contactImage;
    }
    else {
        pageTitle = 'Home Page';
        pageDescription = 'Welcome to our website!';
        meta_images = contactImage;
    }

    return (
        <>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to={'/'} className='textDecoration'>Home</Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className='textDecoration'>Contact</Link>
                    </li>
                    <li>
                        <Link to={'/help'} className='textDecoration'>Help</Link>
                    </li>
                    <li>
                        <Link to={`/user/${id}`} className='textDecoration'>User</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
            <Helmet>
                <meta name={pageTitle} content={pageDescription} />
                <meta
                    name="description"
                    content={pageDescription}
                />
                <meta property='og:image' content={catImage} />
                <meta property='og:image:width' content='200' />
                <meta property='og:image:height' content='200' />
                <meta property='og:description' content={pageDescription} />
                {/* <meta property="og:image:type" content="image/png" /> */}
                <meta property='og:url' content={`${currentPath}`} />
            </Helmet>
        </>
    )
}

export default Nav