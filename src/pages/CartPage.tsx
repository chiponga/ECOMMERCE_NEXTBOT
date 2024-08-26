import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

type CartItemType = {
    id: string;
    name: string;
    price: string;
    quantity: number;
};

const CartPage: React.FC = () => {
    const [cart, setCart] = useState<CartItemType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(savedCart);
    }, []);

    const handleAdd = (id: string) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleRemove = (id: string) => {
        const updatedCart = cart
            .map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="w-full h-screen p-8">
            <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
            {cart.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                cart.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onAdd={() => handleAdd(item.id)}
                        onRemove={() => handleRemove(item.id)}
                        id={''}                    />
                ))
            )}
            <button
                onClick={handleCheckout}
                className="bg-zinc-800 text-white p-4 w-full rounded mt-8"
            >
                Finalizar Compra
            </button>
        </div>
    );
};

export default CartPage;
