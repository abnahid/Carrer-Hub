const Footer = () => {
  return (
    <footer className="bg-[#1A1919] text-gray-400 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-white text-lg font-bold">CareerHub</h2>
          <p className="text-sm">
            There are many variations of passages of Lorem Ipsum, but the
            majority have suffered alteration in some form...
          </p>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Product Section */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Product</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Prototype
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Plans & Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Help Desk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Become a Partner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Developers
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Contact</h3>
          <p className="text-sm">524 Broadway, NYC</p>
          <p className="text-sm">+1 777 - 978 - 5570</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-4 max-w-6xl mx-auto">
        <div className="flex justify-between text-sm">
          <p>© {new Date().getFullYear()} - CareerHub. All Rights Reserved</p>
          <p>Powered by CareerHub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
