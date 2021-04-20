import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {AppContext} from '../App';

const products = [
    {name: 'Product 1', desc: 'A nice thing', price: '$9.99'},
    {name: 'Product 2', desc: 'Another thing', price: '$3.45'},
    {name: 'Product 3', desc: 'Something else', price: '$6.51'},
    {name: 'Product 4', desc: 'Best thing of all', price: '$14.11'},
    {name: 'Shipping', desc: '', price: 'Free'},
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    {name: 'Card type', detail: 'Visa'},
    {name: 'Card holder', detail: 'Mr John Smith'},
    {name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234'},
    {name: 'Expiry date', detail: '04/2024'},
];

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const classes = useStyles();
    const {summaryPrice, cart, client} = useContext(AppContext)

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Ваш заказ
            </Typography>
            <List disablePadding>
                {cart.map((product) => (
                    <ListItem className={classes.listItem} key={product.id}>
                        <ListItemText primary={product.id} secondary={product.description}/>
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Итого"/>
                    <Typography variant="subtitle1" className={classes.total}>
                        {summaryPrice} RUB
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Доставка
                    </Typography>
                    <Typography gutterBottom>{client.fullName}</Typography>
                    <Typography gutterBottom>{client.phone}</Typography>
                    <Typography gutterBottom>{client.address}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Оплата
                    </Typography>
                    <Typography gutterBottom>{client.paymentMethod}</Typography>
                    <Typography gutterBottom>{client.shippingMethod}</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
