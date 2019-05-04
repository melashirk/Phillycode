import React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    withStyles
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const styles = {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
  };

const Header = ({ classes }) => {
    return(
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit">
                Giving Back
            </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Header);
