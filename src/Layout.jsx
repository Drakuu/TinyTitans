import React, { useState } from 'react';
import NavBar from './Layout/NavBar';
import Footer from './Layout/Footer';

function Layout({ children }) {
  const [hambar, sethambar] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always fixed at the top */}
      <div className="fixed w-full top-0 left-0 z-40">
        <NavBar hambar={hambar} sethambar={sethambar} />
      </div>

      {/* Main Content */}
      <div className="flex-1 mt-20 lg:mt-32">
        <div className="px-4 lg:px-16">
          {children}
        </div>
      </div>

      {/* Footer - Always Sticks to the Bottom */}
      <Footer />
    </div>
  );
}

export default Layout;
