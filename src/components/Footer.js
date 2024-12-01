const Footer = () => {
  return (
    <footer className="bg-[#10375C] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Column 1: About Us */}
        <div>
          <h2 className="font-bold text-lg mb-2">About Foodies Point</h2>
          <p className="text-sm text-gray-300">
            Foodies Point is your go-to destination for discovering top-rated
            restaurants, enjoying delicious meals, and satisfying all your
            cravings. We’re here to make food ordering simple, fast, and
            enjoyable.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-yellow-400 transition">
                Cart
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h2 className="font-bold text-lg mb-2">Contact Us</h2>
          <p className="text-sm text-gray-300">Email: support@foodiespoint.com</p>
          <p className="text-sm text-gray-300">Phone: +1 (123) 456-7890</p>
          <p className="text-sm text-gray-300">
            Address: 123 Food Lane, Gourmet City
          </p>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-6 pt-4">
        <p className="text-center text-sm text-gray-400">
          © 2024 Foodies Point. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
