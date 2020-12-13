import React, { useState, useCallback } from 'react';
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
    const [textPicture, setTextPicture] = useState<File>();

    const uploadTextPicture = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files) {
                setTextPicture(event.target.files[0]);
                alert(`${event.target.files[0].name} uploaded successfully!`);
            }
        },
        [setTextPicture]
    );

    return (
        <main className={homeStyles.root}>
            <h1>Welcome to Digitize Text</h1>
            <h3>To start using the app please upload a picture with text</h3>
            <label htmlFor='file-upload'>Upload a picture</label>
            <input type='file' name='file-upload' onChange={uploadTextPicture} />
            <h3>or</h3>
            <h3>Click the camera icon to take a new picture</h3>
            <Link to='/camera' className={homeStyles.cameraLink}>
                <i className='fas fa-camera'></i>
            </Link>
        </main>
    );
};

export default HomePage;
