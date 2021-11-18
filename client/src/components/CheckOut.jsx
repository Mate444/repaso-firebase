import { useState } from 'react';
import { product } from '../data/data';
import { getFirestore } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import BuyerForm from './Form';

const CheckOut = () => {
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const date = new Date();
  const orderDate = date.toLocaleDateString()

  const db = getFirestore();
  const orders = db.collection("orders");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();   
    const newOrder = {
      buyer,
      product,
      price: product.price * 2,
      date: orderDate
    };
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

      const results = await orders.add(newOrder);
      if (buyer.email.length < 10 || buyer.name.length < 5 || buyer.phone.length < 8) {
        alert('Completa todos los campos por favor');
        return;
      }
      if (!phoneRegex.test(buyer.phone)) {
        alert('Formato de telefono incorrecto');
        return;
      }
      setBuyer({
        name: '',
        email: '',
        phone: ''
      });
      setDoc(doc(db, 'products', '4zU8qIvfnYAQFrunXy4n'), {
        ...product, stock: product.stock - 2
      });
    } catch (err) {
      console.error(err);
    };
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Inserta aquí tu nombre y apellido</label> 
        <BuyerForm setBuyer={setBuyer} name='name' buyer={buyer}/>
        <label>Inserta aquí tu email</label>
        <BuyerForm setBuyer={setBuyer} name='email' buyer={buyer}/>
        <label>Inserta aquí tu telefono</label>
        <BuyerForm setBuyer={setBuyer} name='phone' buyer={buyer}/>
        <button type='submit'>
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
