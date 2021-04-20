import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useRedirect} from '../hooks/redirect.hook';
import {Badge} from '@material-ui/core';
import {AppContext} from '../App';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        cursor: 'pointer'
    },
}));

export default function NavigationBar() {
    const { cartItemsCount } = React.useContext(AppContext)
    const classes = useStyles();
    const [redirectTo] = useRedirect();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => redirectTo('/')}
                    >
                        Ольгин Сад
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={() => redirectTo('/catalog')}
                        >
                            <Typography variant='h6'>Каталог</Typography>
                        </IconButton>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={() => redirectTo('/cart')}
                        >

                            <Badge badgeContent={cartItemsCount} color="secondary">
                                <ShoppingCartIcon/>
                            </Badge>

                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
