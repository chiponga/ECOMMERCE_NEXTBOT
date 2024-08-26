import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Criptografar, Descriptografar } from '../Cripto';
import Socket from '../Socket';

const HomeScreen: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [valor, setValor] = useState<string>('');
    const [base64, setBase64] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const id = query.get('id');
        if (id) {
            const get = {
                Code: '3264543654456675574',
                ID: Criptografar(JSON.stringify(id)),
            };

            Socket.socket.emit('ProdutosCadastrados', Criptografar(JSON.stringify(get)));

            Socket.socket.once('responseProdutosCadastrados', (data) => {
                const { NOME_PRODUTO, VALOR, BASE64 } = JSON.parse(Descriptografar(data));
                setNome(NOME_PRODUTO);
                setValor(VALOR);
                setBase64(BASE64);
            });

            return () => {
                Socket.socket.off('responseProdutosCadastrados');
            };
        }
    }, []);

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const newItem = { id: nome, name: nome, price: valor, quantity: 1 };
        const updatedCart = [...cart, newItem];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        navigate('/cart');
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <ProductCard nome={nome} valor={valor} base64={base64} onAddToCart={handleAddToCart} />
        </div>
    );
};

export default HomeScreen;
