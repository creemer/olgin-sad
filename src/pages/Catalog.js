import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import CatalogItem from '../components/CatalogItem';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Catalog = () => {
    const classes = useStyles();

    return (
        <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Каталог моих растений
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Здесь Вы можете посмотреть, выбрать и купить растения которые Вам понравятся.
                        Наслаждайтесь их красотой и преобретайте!
                        Не стестяйтесь!
                    </Typography>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <CatalogItem card={card} key={String(card)}/>
                    ))}
                </Grid>
            </Container>
        </main>
    );
};

export default Catalog;
