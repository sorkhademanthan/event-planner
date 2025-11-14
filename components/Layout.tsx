import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollAnimationsProvider from './ScrollAnimationsProvider';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ScrollAnimationsProvider>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </ScrollAnimationsProvider>
  );
};

export default Layout;