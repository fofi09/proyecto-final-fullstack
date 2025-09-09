import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f0e1] py-16">
      {/* Contenedor principal: ajustado para moverlo sutilmente a la derecha */}
      <div className="container mx-auto px-4 w-full max-w-6xl ml-12">
        {/* Contenedor principal: separa Newsletter de las otras tres columnas */}
        <div className="flex flex-col md:flex-row justify-between gap-12 text-[#333333]">
          {/* Sección de Newsletter */}
          <div className="w-full md:w-1/4">
            <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter to get more informations</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 py-2 px-4 border border-gray-400 focus:outline-none focus:border-green-600"
              />
              <button className="bg-[#1f7a68] text-white py-2 px-6 hover:bg-[#1a6456] transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contenedor que agrupa las otras tres columnas. No se modifica. */}
          <div className="flex flex-col md:flex-row md:gap-12">
            {/* Sección de Navegación */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Navigation</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Campaign</a></li>
                <li><a href="#" className="hover:underline">Team</a></li>
              </ul>
            </div>

            {/* Sección de About Us */}
            <div>
              <h3 className="font-semibold text-lg mb-2">About Us</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Address</a></li>
              </ul>
            </div>

            {/* Sección de Help */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Help</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">Donor Guide</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">We Are Hiring</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-12 border-gray-400" />

        {/* Sección de Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Designed by Ramin Khan</p>
          <p>WWW.Dribbble.Com/Ramin_ui</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;