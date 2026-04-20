import { useState }       from "react";
import { CartProvider }   from "./context/CartContext.jsx";
import { AuthProvider }   from "./context/AuthContext.jsx";
import { ToastProvider }  from "./context/ToastContext.jsx";
import { useCart }        from "./context/CartContext.jsx";
import { useAuth }        from "./context/AuthContext.jsx";
import { useToast }       from "./context/ToastContext.jsx";
import useProducts        from "./hooks/useProducts.js";
import Navbar             from "./components/layout/Navbar.jsx";
import Hero               from "./components/layout/Hero.jsx";
import Footer             from "./components/layout/Footer.jsx";
import ShopPage           from "./pages/ShopPage.jsx";
import CartDrawer         from "./components/cart/CartDrawer.jsx";
import LoginModal         from "./components/auth/LoginModal.jsx";

function AppInner() {
  const { isLoggedIn }           = useAuth();
  const { addToCart }            = useCart();
  const { add: toast }           = useToast();
  const productState             = useProducts();
  const [showCart,  setShowCart] = useState(false);
  const [showLogin, setShowLogin]= useState(false);

  const handleAddToCart = (product) => {
    if (!isLoggedIn) { setShowLogin(true); return; }
    addToCart(product);
    toast(`${product.name} added to cart!`, "success");
  };

  const handleCartClick = () => {
    if (!isLoggedIn) { setShowLogin(true); return; }
    setShowCart(true);
  };

  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0f" }}>
      <Navbar onCartClick={handleCartClick} onLoginClick={() => setShowLogin(true)} />
      <Hero />
      <ShopPage {...productState} onAddToCart={handleAddToCart} />
      <Footer />
      {showCart  && <CartDrawer  onClose={() => setShowCart(false)}  />}
      {showLogin && <LoginModal  onClose={() => setShowLogin(false)} />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <AppInner />
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  );
}