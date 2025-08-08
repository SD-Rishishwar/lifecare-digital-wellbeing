import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-medical-gray-200">
      {/* Top Bar */}
      <div className="bg-medical-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-medical-primary-foreground text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Emergency: +91-9876543210</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Health Street, Medical City</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>24/7 Emergency Services Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-medical-primary rounded-lg flex items-center justify-center">
              <span className="text-medical-primary-foreground font-bold text-xl">LC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold font-poppins text-medical-accent">
                Life Care Hospital
              </h1>
              <p className="text-sm text-medical-gray-600">Your Health, Our Mission</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-medical-primary ${
                  isActivePath(item.path)
                    ? "text-medical-primary border-b-2 border-medical-primary"
                    : "text-medical-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-medical-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-medical-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-medical-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-medical-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 hover:text-medical-primary ${
                    isActivePath(item.path)
                      ? "text-medical-primary"
                      : "text-medical-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;