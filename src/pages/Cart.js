import React, { useContext } from 'react';
import {AppContext} from '../App';
import {useRedirect} from '../hooks/redirect.hook';

const Cart = () => {
    const { cart } = useContext(AppContext);
    const [ redirectTo ] = useRedirect()

    return (
        <div>
            <ul>
                {cart.map((item) => (
                    <li>
                        <p>{`Item id ${item.id}. Count added: ${item.count}`}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => redirectTo('/checkout')}>Оформить заказ</button>
        </div>
    );
};

export default Cart;
