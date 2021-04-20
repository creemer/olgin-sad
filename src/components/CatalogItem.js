import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {ButtonGroup, InputAdornment, TextField} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import {AppContext} from '../App';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardActions: {
        minHeight: 72
    },
    countAddContent: {
        width: 200,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const CatalogItem = ({card}) => {
    const { addToCart } = React.useContext(AppContext);
    const [count, setCount] = useState(1);
    const [countingInProcess, setCountingInProcess] = useState(false)
    const classes = useStyles();

    const {inCart = false, inCartCount = 0} = card

    const handleAddToCart = () => {
        // adding to cart logic will be here
        console.log('Adding to cart...', count, 'items');

        addToCart({
            id: Date.now(),
            count: count,
            description: `Some item`,
            price: Math.round(Math.random() * 100),
            imageUrl: "https://source.unsplash.com/random"
        })
        setCountingInProcess(false);
    }

    const buttonText = (inCart && inCartCount > 0) ? `В корзине ${inCartCount}шт` : 'Добавить в корзину'

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Heading
                    </Typography>
                    <Typography>
                        This is a media card. You can use this section to describe the content.
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    {countingInProcess ? (
                        <>
                            <ButtonGroup className={classes.countAddContent}>
                                <Button
                                    aria-label="reduce"
                                    onClick={() => {
                                        setCount(Math.max(count - 1, 1));
                                    }}
                                >
                                    <RemoveIcon fontSize="small"/>
                                </Button>
                                <TextField
                                    variant="outlined"
                                    value={count}
                                    onChange={(ev) => setCount(Number(ev.target.value))}
                                    endAdornment={<InputAdornment position="end">шт</InputAdornment>}
                                />
                                <Button
                                    aria-label="increase"
                                    onClick={() => {
                                        setCount(count + 1);
                                    }}
                                >
                                    <AddIcon fontSize="small"/>
                                </Button>
                            </ButtonGroup>
                            <IconButton
                                aria-label="add to shopping cart"
                                aria-controls="catalog-item"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={handleAddToCart}
                            >
                                <AddShoppingCartIcon/>
                            </IconButton>
                            <IconButton
                                aria-label="add to shopping cart"
                                aria-controls="catalog-item"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={() => setCountingInProcess(false)}
                            >
                                <ClearIcon/>
                            </IconButton>
                        </>
                    ) : (
                        <Button size="small" color="primary" onClick={() => setCountingInProcess(true)}>
                            {buttonText}
                        </Button>
                    )}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CatalogItem;
