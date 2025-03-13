// app/[locale]/layout.tsx
import React from 'react';



export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body style={{margin:"0"}}>
        {children}
      </body>
    </html>
  );
}
