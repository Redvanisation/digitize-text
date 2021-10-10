# Digitize Text


  

<!-- PROJECT SHIELDS -->

<!--

*** I'm using markdown "reference style" links for readability.

*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).

*** See the bottom of this document for the declaration of the reference variables

*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.

*** https://www.markdownguide.org/basic-syntax/#reference-style-links

-->


 [![Issues][issues-shield]][issues-url] [![stars][stars-shield]][stars-url] [![Forks][forks-shield]][forks-url] [![MIT License][license-shield]][license-url]  
  

<!-- PROJECT LOGO -->

<br />

<p  align="center">

<!-- <a href="https://github.com/Redvanisation/FreeRun">

<img src="./public/screenshot1.png" alt="Logo" width="860" height="460">

</a> -->

  

<!-- <h2  align="center">DIGITIZE TEXT</h2> -->

  

<p  align="center">

A React app that converts handwritten or printed text on paper to computer text (digitizing it) taking off all that effort to type long text to the computer giving you a faster and easier way to get things done.

<br />

<br />
<!-- <a href="https://objective-payne-c9a208.netlify.com/" target="_blank">Live Link</a> -->

· <a  href="https://github.com/Redvanisation/digitize-text/issues">Report Bug</a>

· <a  href="https://github.com/Redvanisation/digitize-text/issues">Request Feature</a>

</p>

</p>

  
  
  

<!-- TABLE OF CONTENTS -->

## Table of Contents

  

*  [About the Project](#about-the-project)
*  [Built With](#built-with)
*  [Getting Started](#getting-started)
*  [Prerequisites](#prerequisites)
*  [Installation](#installation)
*  [Usage](#usage)
*  [Contributing](#contributing)
*  [License](#license)
*  [Contact](#contact)

<!-- * [Future Implementations](#future-implementations) -->

  
  
  

<!-- ABOUT THE PROJECT -->

## About The Project

  

<!-- [![Product Name Screen Shot][product-screenshot]](https://objective-payne-c9a208.netlify.app/) -->

  

This is a full-stack project with web and native apps developed with React, React Native, TypeScript, and NodeJS, it uses the webcam/camera to snap a picture of handwritten or printed text on paper or gets an image that you upload and converts it to a formatted digitized version on the computer, it makes use of the Google Cloud Vision API for character recognition, NestJS in the backend and PostgreSQL as the database.

A second feature that will be added in the future it the ability to tell in which language a piece of text has been written after scanning it.
  
  

### Built With

  

*  [ReactJS](http://reactjs.org/)

*  [React Hooks](https://reactjs.org/docs/hooks-intro.html)

*  [React Native](https://reactnative.dev/)

*  [TypeScript](https://www.typescriptlang.org/)

*  [Material UI](https://material-ui.com/)

*  [Linaria](https://linaria.dev/)

*  [NestJS](https://nestjs.com/)

*  [PostgreSQL](https://www.postgresql.org/)

<!-- * [JWT](https://jwt.io/) -->

<!-- * [Bulma](https://bulma.io/) -->

  
  
  

<!-- GETTING STARTED -->

## Getting Started

  

To get a local copy up and running follow these simple steps.

  
  
  

### Prerequisites

  

* This project uses `yarn`

```sh

npm install yarn -g

```

  
  
  

### Installation

1. Clone the repo and cd into it

```sh

git clone git@github.com:Redvanisation/digitize-text.git

  

cd digitize-text

```

2. Install Yarn packages

```sh

yarn install

```

3. Run the development server, use the following commands from the root folder

### For the web app

```sh

yarn run dev:start/web

```
### For the server

```sh

yarn run dev:start/server

```

4. To run the mobile app follow the steps below

    1. Go to [this page](https://reactnative.dev/docs/environment-setup) and follow the steps for both IOS and Android using the **React Native CLI**
    2. After setting up the development environment for mobile run the following commands from the root directory to start the app

    ### For the native IOS app

    ```sh

    yarn run dev:start/ios

    ```
    ### For the native Android app first open the Android simulator then run

    ```sh

    yarn run dev:start/android

    ```

  
  
  

<!-- USAGE EXAMPLES -->

## Usage

  

- To be determined...

  
  
  

<!-- CONTRIBUTING -->

## Contributing

  

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read our [CONTRIBUTING][contributing] guidelines and our [Code of Conduct][code of conduct] before making contributions.

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Read the information on [here][your first pull request], then Open a Pull Request

  
  
  

<!-- LICENSE -->

## License

  

Distributed under the MIT License. See `LICENSE` for more information.

  
  
  

<!-- CONTACT -->

## Contact

  

**Radouane Khiri** - [@redvanisation](https://twitter.com/redvanisation) - [LinkedIn](https://www.linkedin.com/in/redvan/) - redvanisation@gmail.com

  
  
  
  
  

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[stars-shield]:  https://img.shields.io/github/stars/Redvanisation/digitize-text?style=for-the-badge

[stars-url]:  https://github.com/Redvanisation/digitize-text/stargazers

[forks-shield]:  https://img.shields.io/github/forks/Redvanisation/digitize-text?style=for-the-badge

[forks-url]:  https://github.com/Redvanisation/digitize-text/network/members

[issues-shield]:  https://img.shields.io/github/issues/Redvanisation/digitize-text?style=for-the-badge

[issues-url]:  https://github.com/Redvanisation/digitize-text/issues

[license-shield]:  https://img.shields.io/github/license/Redvanisation/digitize-text?style=for-the-badge

[license-url]:  https://github.com/Redvanisation/digitize-text/blob/main/LICENSE

[your first pull request]: YourFirstPR.md

<!-- [product-screenshot]: ./public/screenshot2.png -->