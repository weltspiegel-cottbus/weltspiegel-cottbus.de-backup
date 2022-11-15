import Content from "../content";

export default async function () {
  return (
    <Content title="Programm">
      <p>
        Das Zusammenstellen des aktuellen Programms mit Ticketkauf-Möglichkeit kann ich
        wie bisher auch automatisieren mit Hilfe der Cinetixx-API.
      </p>
      <p className="mt-4">
        Die Unterseiten Vorschau, FilmKunstTage und SpatzenKino müssten entweder je nach
        Notwendigkeit (SpatzenKino) erstellt und gepflegt werden. Oder könnten aus einem
        CMS abgerufen werden.
      </p>
    </Content>
  );
}
