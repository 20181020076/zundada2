import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import Cart from "./views/Cart/Cart";
import Favorites from "./views/Favorites/Favorites";
import Tickets from "./views/Tickets/Tickets";
import EventDetailsContainer from "./views/EventDetailsContainer/EventDetailsContainer";
import CartProvider from "./context/CartProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/tickets" element={<Tickets />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/events" element={<Home />} />
          <Route path="/events/:id" element={<EventDetailsContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
