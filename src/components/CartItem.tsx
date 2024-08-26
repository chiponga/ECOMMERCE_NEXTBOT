import React from 'react';

type CartItemProps = {
    id: string;s
    name: string;
    price: string;
    quantity: number;
    onAdd: () => void;
    onRemove: () => void;
};

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity, onAdd, onRemove }) => {
    return (
        <div className="flex justify-between flex-col items-center my-2 border border-zinc-800 p-2 rounded-lg">
            <div className='flex flex-col'>
                <span className='mb-2'>{name}</span>
            </div>
            <div className="flex justify-between w-full">
                <span className='text-lg font-semibold'>Valor: {price}</span>
                <div className='flex items-center justify-center'>
                    <span className='font-bold'>Quantidade:</span>
                <button onClick={onRemove} className="px-2 font-black text-zinc-900 rounded">-</button>
                <span className="">{quantity}</span>
                <button onClick={onAdd} className="px-2 font-black text-zinc-900 rounded">+</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
