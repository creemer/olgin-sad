import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './components/Copyright';
import NavigationBar from './components/NavigationBar';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const App = () => {
    const classes = useStyles();

    return (
        <Router>
            <CssBaseline />
            <NavigationBar />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/catalog">
                    <Catalog />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </Router>
    );
}

export default App;
