import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">EShop</Link>
        <nav>
          <Link to="/cart" className="flex items-center">
            <ShoppingCart className="mr-2" />
            <span>Cart ({cart.length})</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;