import React from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function RootLayout({ children }) {
  const theme = {
    background: '#111111',
    foreground: '#eeeeee',
  };

  return (
    <html lang="en">
      <body>
        <ThemeContext.Provider value={theme}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
