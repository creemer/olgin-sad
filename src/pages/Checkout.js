import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../components/AddressForm';
import Review from '../components/Review';
import {useRedirect} from '../hooks/redirect.hook';
import {AppContext} from '../App';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
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
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Доставка / оплата', 'Ваш заказ'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm/>;
        case 1:
            return <Review/>;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [redirectTo] = useRedirect();
    const { clientFilled } = useContext(AppContext);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        if (activeStep === 0) {
            redirectTo('/cart');
            return;
        }
        setActiveStep(activeStep - 1);
    };

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Оформление заказа
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Благодарю за Ваш заказ.
                            </Typography>
                            <Typography variant="subtitle1">
                                Ваш заказ подтвержден. Номер Вашего заказа #2001539.
                                Подтверждение заказа отправлено на указанную Вами почту.
                                В ближайшее время, я свяжусь с Вами для подтверждения заказа.
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <div className={classes.buttons}>
                                <Button onClick={handleBack} className={classes.button}>
                                    Назад
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                    disabled={activeStep === 0 && !clientFilled}
                                >
                                    {activeStep === steps.length - 1 ? 'Разместить заказ' : 'Дальше'}
                                </Button>
                            </div>
                        </React.Fragment>
                    )}
                </React.Fragment>
            </Paper>
        </main>
    );
}
