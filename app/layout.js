import "./globals.css";

export const metadata = {
  title: "BidWize — AI Construction Estimation",
  description: "Ship estimates 10× faster with BidWize."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {children}
      </body>
    </html>
  );
}
