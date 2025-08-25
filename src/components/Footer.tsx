import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SparkleClean</h3>
            <p className="text-blue-light mb-4 leading-relaxed">
              Professional cleaning services you can trust. Making your space
              spotless since 2014.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-blue-light hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-blue-light hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-blue-light hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-blue-light hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kitchen Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Office Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Carpet Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  House Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Commercial Cleaning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-blue-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Booking Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Emergency Clean
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-primary/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-blue-light text-sm">
              © 2024 SparkleClean. All rights reserved.
              <br />
              Designed & developed with by Mishal
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <a
                href="#"
                className="text-blue-light hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-light hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-light hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
