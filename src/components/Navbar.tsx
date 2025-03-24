
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, User, Settings, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Therapists', path: '/therapists' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'Community', path: '/community' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <span className="text-spectrum-600 font-bold text-2xl">Spectrum</span>
              <span className="text-primary ml-1 font-bold text-2xl">Connect</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `nav-item ${isActive ? 'active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-secondary transition-colors focus-ring">
              <Sun size={20} className="text-foreground/80" />
            </button>
            <NavLink to="/profile" className="p-2 rounded-full hover:bg-secondary transition-colors focus-ring">
              <User size={20} className="text-foreground/80" />
            </NavLink>
            <NavLink to="/settings" className="p-2 rounded-full hover:bg-secondary transition-colors focus-ring">
              <Settings size={20} className="text-foreground/80" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-2 space-y-1 animate-fade-in`}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-3">
              <div className="flex items-center space-x-3">
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Sun size={20} className="text-foreground/80" />
                </button>
                <NavLink to="/profile" onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <User size={20} className="text-foreground/80" />
                </NavLink>
                <NavLink to="/settings" onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Settings size={20} className="text-foreground/80" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
