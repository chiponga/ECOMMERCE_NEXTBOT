import React from 'react';

const CheckoutPage: React.FC = () => {
    const handlePayment = () => {
        alert('Compra finalizada com sucesso!');
        localStorage.removeItem('cart');
    };

    return (
        <div className="w-full h-screen flex justify-center items-center p-8">
            <div className="w-full max-w-md p-4 border rounded">
                <h2 className="text-2xl font-bold mb-4">Finalizar Compra</h2>
                <input
                    type="text"
                    placeholder="Número do cartão"
                    className="w-full p-2 border rounded mb-4"
                />
                <input
                    type="text"
                    placeholder="Nome no cartão"
                    className="w-full p-2 border rounded mb-4"
                />
                <input
                    type="text"
                    placeholder="Data de expiração"
                    className="w-full p-2 border rounded mb-4"
                />
                <input
                    type="text"
                    placeholder="CVV"
                    className="w-full p-2 border rounded mb-4"
                />
                <button
                    onClick={handlePayment}
                    className="bg-green-500 text-white p-4 rounded w-full"
                >
                    Pagar
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;
