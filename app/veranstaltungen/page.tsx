import Content from "../content";

export default async function () {
  return (
    <Content title="Veranstaltungen">
      <p>
        Hier wäre es etwas aufwändig, die Inhalte statisch einzupflegen. Stattdessen sollte
        ein CMS - Content Management System - benutzt werden, dass auch eine Headless-API
        bietet.
      </p>
      <p className="mt-4">
        Zur Not geht das vielleicht auch mit Joomla - müsste ich aber prüfen. Genauso wie
        eine Alternative zu Joomla evaluiert werden müsste. Es gibt kostenlose Systeme auf
        dem Markt. Und viel Funktionalität brauchen wir auch nicht.
      </p>
    </Content>
  );
}
