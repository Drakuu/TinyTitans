import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SectionsAll from "./pages/SectionsAll";
import TermCondition from "./pages/TermCondition";
import Delivery from "./pages/Delivery";
import Collection from "./pages/collection/collection";
import Accessories from "./pages/collection/accessories";
import BabyBoy from "./pages/collection/babyBoy";
import BabyGirl from "./pages/collection/babyGirl";
import BabyNeutral from "./pages/collection/babyNeutral";
import Cart from "./pages/collection/cart";
import Account from "./pages/account";

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>} />
        <Route path="/account" element={<Layout><Account/></Layout>} />
        <Route path="/section-all" element={<Layout><SectionsAll/></Layout>} />
        <Route path="/term-condition" element={<Layout><TermCondition/></Layout>} />
        <Route path="/delivery" element={<Layout><Delivery/></Layout>} />
        <Route path="/collection" element={<Layout><Collection/></Layout>} />
        <Route path="/accessories" element={<Layout><Accessories /></Layout>} />
        <Route path="/baby-boy" element={<Layout><BabyBoy /></Layout>} />
        <Route path="/baby-girl" element={<Layout><BabyGirl /></Layout>} />
        <Route path="/baby-neutral" element={<Layout><BabyNeutral /></Layout>} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="*" element={<h1 className="text-center mt-10 text-2xl font-bold">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
