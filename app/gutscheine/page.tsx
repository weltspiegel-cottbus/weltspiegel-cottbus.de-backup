import Image from "next/image";

import Content from "../content";
import gutscheinPic from "../../public/site-images/gutschein-20-08-13.jpg";

export default async function () {
  return (
    <Content title="Gutscheine">
      <p>
        Gutscheine ab einem Wert von 10€ können online erworben werden. Das
        Bestellfenster öffnet sich über folgenden Link:
      </p>
      <p className="my-6 text-center ">
        <a
          className="text-lg font-semibold text-orange-400 hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://booking.cinetixx.de/frontend/index.html?bgswitch=false&programlink=false&cinemaId=808957959#/gutscheine"
        >
          Online Verkauf Gutscheine
        </a>
      </p>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://booking.cinetixx.de/frontend/index.html?bgswitch=false&programlink=false&cinemaId=808957959#/gutscheine"
      >
        <Image src={gutscheinPic} alt="Weltspiegel Gutschein" />
      </a>

      <p className="mt-4">
        Gutscheine können außerdem täglich im Weltspiegel erworben we rde n -
        jeweils 30 Min vor Vorstellungsbeginn öffnet die Kasse.
      </p>
    </Content>
  );
}
