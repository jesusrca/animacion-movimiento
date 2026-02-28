import "./globals.css";

export const metadata = {
  title: "Carrusel 3D Interactivo",
  description: "Proyecto migrado a Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
