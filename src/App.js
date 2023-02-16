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
import Zones from "./views/Zones/Zones";
import ZoneDetailsContainer from "./views/ZoneDetailsContainer/ZoneDetails";
import GenderDetailsContainer from "./views/GenderDetailsContainer/GenderDetailsContainer";
import Login from "./views/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./views/Register/Register";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
           
        <Navbar />
        <Routes>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/tickets" element={<Tickets />} />          
          <Route path="/profile/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/events" element={<Home />} />
          <Route path="/events/:eid" element={<EventDetailsContainer />} />
          <Route path="/zones" element={<Zones/>}/>
          <Route path="/zones/:zid" element={<ZoneDetailsContainer/>}/>
          <Route path="/zones/:zid/:eid" element={<Home/>}/>
          <Route path="/genders/:gid" element={<GenderDetailsContainer/>}/>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
