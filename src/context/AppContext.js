import React from 'react';
import { AppContext } from '../App';

class AppContextProvider extends React.Component {
    state = {
        cart: []
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
        this.setState({ cart })
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    cart: this.state.cart,
                    cartItemsCount: this.state.cart.length,
                    addToCart: (item) => this.addToCart(item),
                    removeFromCart: (id) => this.removeFromCart(id)
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppContextProvider;
