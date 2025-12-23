import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olti Serviços | Grupo ELESED",
  description: "A limpeza que você sente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}