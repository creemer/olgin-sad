import React, {useContext, useState, useEffect} from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Grid,
    Typography,
    TextField
} from '@material-ui/core';
import {AppContext} from '../App';

const AddressForm = () => {
    const { setClient, setClientFilled, clearClient } = useContext(AppContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [phone, setPhone] = useState('')
    const [shippingMethod, setShippingMethod] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('')

    useEffect(() => {
        if (Boolean(firstName && lastName && address && city && zip && phone && shippingMethod && paymentMethod)) {
            setClientFilled(true)
        }
        return () => {
            setClient(firstName, lastName, address, city, zip, phone, shippingMethod, paymentMethod);
        }
    }, [firstName, lastName, address, city, zip, phone, shippingMethod, paymentMethod])

    useEffect(() => {
        setClientFilled(false);
        clearClient();
    }, [])

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Адрес доставки
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Имя"
                        fullWidth
                        //autoComplete="given-name"
                        onChange={(ev) => setFirstName(ev.target.value)}
                        value={firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Фамилия"
                        fullWidth
                        //autoComplete="family-name"
                        onChange={(ev) => setLastName(ev.target.value)}
                        value={lastName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address"
                        label="Улица/дом/квартира"
                        fullWidth
                        autoComplete="shipping address-line1"
                        value={address}
                        onChange={(ev) => setAddress(ev.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Город"
                        fullWidth
                        autoComplete="shipping address-level2"
                        value={city}
                        onChange={(ev) => setCity(ev.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Индекс"
                        fullWidth
                        autoComplete="shipping postal-code"
                        value={zip}
                        onChange={(ev) => setZip(ev.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Номер телефона"
                        fullWidth
                        autoComplete="shipping phone"
                        value={phone}
                        onChange={(ev) => setPhone(ev.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">
                        Метод оплаты/доставки
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth required>
                        <InputLabel id="shipping-method-label">Способ доставки</InputLabel>
                        <Select
                            labelId="shipping-method-label"
                            id="shipping-method"
                            value={shippingMethod}
                            onChange={event => setShippingMethod(event.target.value)}
                        >
                            <MenuItem value={'cdek'}>СДЭК</MenuItem>
                            <MenuItem value={'post'}>Почта России</MenuItem>
                            <MenuItem value={'self-handling'}>Самовывоз</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth required>
                        <InputLabel id="payment-method-label">Способ оплаты</InputLabel>
                        <Select
                            labelId="payment-method-label"
                            id="payment-method"
                            value={paymentMethod}
                            onChange={event => setPaymentMethod(event.target.value)}
                        >
                            <MenuItem value={'card-transfer'}>Перевод на карту</MenuItem>
                            <MenuItem value={'cash'}>Наличными при получении</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default AddressForm;
