import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeInit = `
    (function() {
      try {
        var t = localStorage.getItem('theme');
        if (t === 'dark') document.body.classList.add('theme-dark');
      } catch(e) {}
    })();
  `;

  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
