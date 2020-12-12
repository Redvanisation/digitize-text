import React from 'react';
import { css } from 'linaria';
import { Link } from 'react-router-dom';

const homeStyles = {
    root: css`
        display: grid;
        place-items: center;
        height: 90vh;
    `,
    cameraLink: css`
        text-decoration: none;
        font-size: 50px;
        color: orange;
    `,
    logo: css`
        width: 100%;
    `,
};

const HomePage = (): JSX.Element => {
    return (
        <div className={homeStyles.root}>
            Home Page!
            {/* <img src='' alt='logo' className={homeStyles.logo} /> */}
            <Link to='/camera' className={homeStyles.cameraLink}>
                <i className='fas fa-camera'></i>
            </Link>
        </div>
    );
};

export default HomePage;
