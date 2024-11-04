import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  cols?: string; // Tailwind grid-cols property value, e.g. "grid-cols-2"
  gap?: string;  // Tailwind gap class, e.g. "gap-4"
}

const Layout: React.FC<LayoutProps> = ({ children, cols = 'grid-cols-2', gap = 'gap-4' }) => {
  return (
    <div className={`grid ${cols} ${gap}`}>
      {children}
    </div>
  );
};

export default Layout;
