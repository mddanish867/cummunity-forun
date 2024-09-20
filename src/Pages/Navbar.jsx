import React, { useState } from 'react';
import { MessagesSquare, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginRegister = () => {
    navigate("/login-register");
  };

  const handleSearchResult = () => {
    navigate("/search");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-primary text-primary-foreground border-b border-b-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side of the Navbar */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <MessagesSquare className="text-orange-400 mr-1" />
            </a>

            {/* Search Input (Mobile) */}
            <div className="md:hidden flex items-center ml-2">
              <input
                onClick={handleSearchResult}
                type="text"
                placeholder="Search..."
                className="w-40 px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/forums" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                  Forums
                </a>
                <a href="/user-profile" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                  Profile
                </a>
                <a href="/notifications" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                  Notifications
                </a>
                <a href="/settings" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                  Settings
                </a>
                <a href="/moderation" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                  Moderation
                </a>
              </div>
            </div>
          </div>

          {/* Search and Login/Register (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <input
                  onClick={handleSearchResult}
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <button
                onClick={handleLoginRegister}
                className="ml-4 px-4 py-2 text-sm font-medium text-orange-400 bg-white border border-orange-400 rounded-md hover:bg-orange-400-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Login
              </button>
              <button
                onClick={handleLoginRegister}
                className="ml-2 px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-orange-400 rounded-md hover:bg-orange-500-foreground hover:text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Register
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding from the right) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white text-primary-foreground z-50 flex justify-end">
          <div className="bg-white w-64 h-full p-6">
            <div className="flex flex-col space-y-4">
              <a
                href="/forums"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500"
                onClick={toggleMobileMenu}
              >
                Forums
              </a>
              <a
                href="/user-profile"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500"
                onClick={toggleMobileMenu}
              >
                Profile
              </a>
              <a
                href="/notifications"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500"
                onClick={toggleMobileMenu}
              >
                Notifications
              </a>
              <a
                href="/settings"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500"
                onClick={toggleMobileMenu}
              >
                Settings
              </a>
              <a
                href="/moderation"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500"
                onClick={toggleMobileMenu}
              >
                Moderation
              </a>
              <button
                onClick={handleLoginRegister}
                className="w-full px-4 py-2 text-sm font-medium text-orange-400 bg-white border border-orange-400 rounded-md hover:bg-orange-400-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Login
              </button>
              <button
                onClick={handleLoginRegister}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-orange-400 rounded-md hover:bg-orange-500-foreground hover:text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
