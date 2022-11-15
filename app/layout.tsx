import Image from "next/image";
import "./global.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Weltspiegel Cottbus</title>
      </head>
      <body className="bg-stone-900 text-white">
        <div className="max-w-6xl">
          <div className="h-28 sm:pt-4 w-full fixed top-0 -z-10">
            <img
              src="/layout-images/logo.png"
              alt="Logo Weltspiegel Cottbus"
              className="w-[min(100%,1152px)] object-top object-none my-4 sm:my-0"
            />
          </div>
          <div
            style={{ backgroundImage: "url(/layout-images/paper-pattern.jpg)" }}
            className="mt-28 sm:mt-32 mb-4 md:mr-4 md:rounded-r p-2 sm:p-4"
          >
            <div className="flex">
              <div className="hidden md:block basis-52 shrink-0 relative">
                <div>
                  <ul className="space-y-2">
                    <li>Menu 1</li>
                    <li>Menu 2</li>
                    <li>Menu 3</li>
                    <li>Menu 4</li>
                    <li>Menu 5</li>
                    <li>Menu 6</li>
                    <li>Menu 7</li>
                    <li>Menu 8</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <img
                    src="/layout-images/eintrittskarte.png"
                    alt=""
                    className="translate-x-4"
                  />
                </div>
              </div>
              <div
                style={{
                  background:
                    "radial-gradient(rgba(46,30,10,0.8), rgba(25,16,6,0.8))",
                }}
                className="w-full p-2 sm:p-4 bg-[#281a08]/90 rounded"
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
