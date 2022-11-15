import Link from "next/link";

import { Kameron } from "@next/font/google";

import "./global.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const kameron = Kameron({ weight: "400" });

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
            className="mt-28 sm:mt-32 mb-4 md:mr-4 md:rounded-r"
          >
            <div className="bg-black/30 flex p-2 sm:p-4">
              <div className="hidden md:block basis-52 shrink-0 relative">
                <div className={kameron.className}>
                  <ul className="text-gray-200 [&_li]:select-none [&_li:hover]:text-white  [&_li:hover]:underline [&_li:hover]:underline-offset-2 mt-20 space-y-2 text-lg text-right pr-4 uppercase tracking-wide">
                    <li>
                      <Link href="/">Startseite</Link>
                    </li>
                    <li>
                      <Link href="/programm">Programm</Link>
                    </li>
                    <li>
                      <Link href="/veranstaltungen">Veranstaltungen</Link>
                    </li>
                    <li>
                      <Link href="/gutscheine">Gutscheine</Link>
                    </li>
                    <li>
                      <Link href="/der-weltspiegel">Der Weltspiegel</Link>
                    </li>
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
