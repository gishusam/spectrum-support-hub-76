
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 pb-20 mx-auto w-full max-w-7xl animate-fade-in">
        {children}
      </main>
      <footer className="py-6 border-t border-border bg-secondary/50">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            SpectrumConnect &copy; {new Date().getFullYear()} - Supporting the ASD Community
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
