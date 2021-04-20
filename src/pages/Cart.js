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
    Button,
    Paper
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%",
            backgroundColor: theme.palette.background.paper
        },
        container: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
            },
        },
        inline: {
            display: "inline"
        },
        listItem: {
            padding: theme.spacing(1, 3),
            justifyContent: "flex-end"
        },
        successButton: {
            margin: '15px 0'
        },
        total: {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.fontSize * 2
        }
    })
)

const Cart = () => {
    const classes = useStyles()
    const {cart, summaryPrice} = useContext(AppContext);
    const [redirectTo] = useRedirect()

    return (
        <main className={classes.container}>
            <Paper className={classes.paper}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Корзина товаров
                </Typography>
                <Typography component="p" variant="body1">
                    Товаров в корзине: {cart.length}
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
                                                    {(product.price * product.count).toFixed(2)} RUB
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
                            {summaryPrice.toFixed(2)} RUB
                        </Typography>
                    </ListItem>
                </List>

                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.successButton}
                    onClick={() => redirectTo('/checkout')}
                >
                    Оформить заказ
                </Button>
            </Paper>
        </main>
    )
};

export default Cart;

