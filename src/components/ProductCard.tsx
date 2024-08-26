import React from 'react';

type ProductCardProps = {
    nome: string;
    valor: string;
    base64: string;
    onAddToCart: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ nome, valor, base64, onAddToCart }) => {
    return (
        <div className="w-full h-full flex flex-col items-center p-4">
            <img
                src={`data:image/jpeg;base64,${base64}`}
                className="w-full h-64 object-cover"
                onError={(e) => {
                    e.currentTarget.src = 'Fotos/index.png';
                }}
            />
            <h1 className="text-xl font-bold mt-4">{nome}</h1>
            <p className="text-2xl text-red-600 mt-2">{valor}</p>
            <button
                className="bg-black text-white p-4 rounded w-full mt-4"
                onClick={onAddToCart}
            >
                ADICIONAR AO CARRINHO
            </button>
        </div>
    );
};

export default ProductCard;
