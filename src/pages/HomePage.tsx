import React from 'react';
import { css } from 'linaria';


const homeStyles = {
  root: css`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
`,
cameraLink: css`
  text-decoration: none;
  font-size: 50px;
  color: orange;
  
`,
logo: css`
  width: 100%;
`

}

const HomePage = (): JSX.Element => {
  return <div className={homeStyles.root}>Home Page!
    <img src="" alt="logo" className={homeStyles.logo}/>
    <a href="/camera" className={homeStyles.cameraLink}> <i className="fas fa-camera"></i> </a>
  </div>
};

export default HomePage;
