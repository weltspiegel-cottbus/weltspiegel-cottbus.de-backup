import "./global.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Weltspiegel Cottbus</title>
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
