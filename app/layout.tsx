import Link from "next/link";

import { Kameron } from "@next/font/google";

import "./global.css";
import MobileNav from "./mobile-nav";

type RootLayoutProps = {
  children: React.ReactNode;
};

const kameron = Kameron({ weight: "400" });

const staticNavigation = [
  { name: "Startseite", href: "/" },
  { name: "Programm", href: "/programm" },
  { name: "Veranstaltungen", href: "/veranstaltungen" },
  { name: "Gutscheine", href: "/gutscheine" },
  { name: "Der Weltspiegel", href: "/der-weltspiegel" },
];

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
          <MobileNav />
          <div
            style={{ backgroundImage: "url(/layout-images/paper-pattern.jpg)" }}
            className="mt-28 sm:mt-32 mb-4 md:mr-4 md:rounded-r"
          >
            <div className="bg-black/30 flex p-2 sm:p-4">
              <div className="hidden md:block basis-52 shrink-0 relative">
                <div className={kameron.className}>
                  <ul className="text-gray-200 mt-20 space-y-2 text-lg text-right uppercase">
                    {staticNavigation.map((item) => (
                      <li>
                        <Link
                          className="select-none hover:text-white hover:underline underline-offset-2 tracking-wide pr-4"
                          href={item.href}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex justify-end">
                  <img src="/layout-images/eintrittskarte.png" alt="" />
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
