import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-accent text-medical-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-medical-primary rounded-lg flex items-center justify-center">
                <span className="text-medical-primary-foreground font-bold text-xl">LC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins">Life Care Hospital</h3>
                <p className="text-sm opacity-80">Your Health, Our Mission</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Providing world-class healthcare services with compassion, excellence, and innovation. 
              Your trusted partner in health and wellness for over two decades.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-90 hover:opacity-100 hover:text-medical-secondary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 hover:text-medical-secondary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm opacity-90 hover:opacity-100 hover:text-medical-secondary transition-colors">
                Our Services
              </Link>
              <Link to="/gallery" className="block text-sm opacity-90 hover:opacity-100 hover:text-medical-secondary transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="block text-sm opacity-90 hover:opacity-100 hover:text-medical-secondary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80" />
                <div className="text-sm">
                  <p className="font-medium">Life Care Hospital</p>
                  <p className="opacity-90">123 Health Street, Medical City</p>
                  <p className="opacity-90">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 opacity-80" />
                <div className="text-sm">
                  <p>Emergency: +91-9876543210</p>
                  <p className="opacity-90">Reception: +91-9876543211</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 opacity-80" />
                <p className="text-sm opacity-90">info@lifecarehospital.com</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Working Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 opacity-80" />
                <div className="text-sm space-y-1">
                  <p className="font-medium">Emergency Services</p>
                  <p className="opacity-90">24/7 Available</p>
                </div>
              </div>
              <div className="text-sm space-y-1">
                <p className="font-medium">OPD Timings</p>
                <p className="opacity-90">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p className="opacity-90">Sunday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="text-sm font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-medical-primary/20 rounded-full flex items-center justify-center hover:bg-medical-primary/30 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-medical-primary/20 rounded-full flex items-center justify-center hover:bg-medical-primary/30 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-medical-primary/20 rounded-full flex items-center justify-center hover:bg-medical-primary/30 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-medical-primary/20 rounded-full flex items-center justify-center hover:bg-medical-primary/30 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-medical-accent-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">
              © 2024 Life Care Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Medical Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;