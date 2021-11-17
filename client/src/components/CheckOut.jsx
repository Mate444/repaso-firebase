import { useState } from 'react';
import { product } from '../data/data';
import { doc, setDoc } from 'firebase/firestore';
import { getFirestore } from '../firebase';

const CheckOut = () => {
  const [buyer, setBuyer] = useState({
    name: 'Hola',
    email: 'Hola@gmail.com',
    phone: '21313213123'
  });

  const date = new Date();
  const orderDate = date.toLocaleDateString()

  const newOrder = {
    buyer,
    product,
    price: product.price * product.quantity,
    date: orderDate
  }

  const db = getFirestore();
  const orders = db.collection("orders");
  const batch = db.batch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const results = await orders.add(newOrder);
      setBuyer({
        name: '',
        email: '',
        phone: ''
      })
      console.log(results)
    } catch (err) {
      console.error(err);    
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type='submit'>d</button>
      </form>
    </div>
  );
};

export default CheckOut;
