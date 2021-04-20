import React, {useContext} from 'react';
import {AppContext} from '../App';
import {useRedirect} from '../hooks/redirect.hook';
import {createStyles, makeStyles} from "@material-ui/core/styles"
import {
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    IconButton,
    Avatar,
    Typography,
    Button
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            padding: 30
        },
        root: {
            width: "100%",
            backgroundColor: theme.palette.background.paper
        },
        inline: {
            display: "inline"
        },
        listItem: {
            padding: theme.spacing(1, 3),
            justifyContent: "flex-end"
        },
        total: {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.fontSize * 2
        }
    })
)

const Cart = () => {
    const classes = useStyles()
    const {cart} = useContext(AppContext);
    const [redirectTo] = useRedirect()

    return (
        <main className={classes.container}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Shopping Basket
            </Typography>
            <Typography component="p" variant="body1">
                You have {cart.length} items in your basket
            </Typography>
            <List className={classes.root}>
                {cart
                    .map((product) => (
                        <React.Fragment key={product.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Product" src={product.imageUrl}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={product.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {(product.price).toFixed(2)} RUB
                                            </Typography>
                                            {` — ${product.description}`}
                                        </React.Fragment>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => {
                                            /* Remove from basket */
                                        }}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li"/>
                        </React.Fragment>
                    ))}
                <ListItem className={classes.listItem}>
                    <Typography variant="subtitle1" className={classes.total}>
                        {(
                            cart
                                .reduce((acc, current) => (acc += current.price), 0)
                        ).toFixed(2)} RUB
                    </Typography>
                </ListItem>
            </List>
            <Button variant="contained" onClick={() => redirectTo('/checkout')}>Оформить заказ</Button>
        </main>
    )
};

export default Cart;

