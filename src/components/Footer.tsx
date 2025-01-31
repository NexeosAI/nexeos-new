import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:contact@nexeos.com', label: 'Email' }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary mb-4 block">
              NEXEOS
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Scotland's Leading AI & Web Development Agency
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Edinburgh, Scotland</li>
              <li>+44 131 XXX XXXX</li>
              <li>contact@nexeos.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {currentYear} NEXEOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}