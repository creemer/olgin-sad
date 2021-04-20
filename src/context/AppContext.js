import React from 'react';
import {AppContext} from '../App';

const initClientValue = {
    fullName: '',
    address: '',
    phone: '',
    shippingMethod: '',
    paymentMethod: '',
};

class AppContextProvider extends React.Component {
    state = {
        cart: [],
        client: initClientValue,
        clientFilled: false
    };

    addToCart = (item) => {
        this.setState((state) => {
            return {
                cart: [...state.cart, item]
            }
        })
    }

    removeFromCart = (id) => {
        const cart = this.state.cart.filter(item => item.id !== id);
        this.setState({cart})
    }

    render() {
        const { fullName, address, phone, shippingMethod, paymentMethod } = this.state.client;
        return (
            <AppContext.Provider
                value={{
                    cart: this.state.cart,
                    cartItemsCount: this.state.cart.length,
                    summaryPrice: this.state.cart.reduce((acc, current) => (acc += current.price * current.count), 0),
                    addToCart: (item) => this.addToCart(item),
                    removeFromCart: (id) => this.removeFromCart(id),
                    setClient: (firstName, lastName, address, city, zip, phone, shippingMethod, paymentMethod) => {
                        this.setState({
                            client: {
                                fullName: `${lastName} ${firstName}`,
                                address: `${zip} ${city} ${address}`,
                                phone,
                                shippingMethod,
                                paymentMethod
                            }
                        })
                    },
                    clearClient: () => this.setState({client: initClientValue}),
                    clientFilled: this.state.clientFilled,
                    setClientFilled: (value = true) => {
                        this.setState({clientFilled: value})
                    },
                    client: this.state.client
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppContextProvider;
