import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { css } from 'linaria';
import { Link } from 'react-router-dom';

const navStyles = {
    root: css`
        flex-grow: 1;
    `,

    navLink: css`
        &:link,
        &:visited {
            color: #fff;
            text-decoration: none;
        }
    `,
};

const Navigation = (): JSX.Element => {
    return (
        <div className={navStyles.root}>
            <AppBar position='static'>
                <Toolbar>
                    {/* <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
                    <Typography variant='h6'>Digitize Text</Typography>
                    <Button color='inherit'>
                        <Link to='/' className={navStyles.navLink}>
                            Home
                        </Link>
                    </Button>
                    <Button color='inherit'>
                        <Link to='/camera' className={navStyles.navLink}>
                            Camera
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;
