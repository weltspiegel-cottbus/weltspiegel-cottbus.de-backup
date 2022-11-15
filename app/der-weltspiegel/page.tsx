import Content from "../content";

export default async function () {
  return (
    <Content title="Der Weltspiegel">
      <p>
        Hier kommen Historie, Fakten, Informationen zur Location sowie eventuell
        Bildergalerien hinein.
      </p>
      <p className="mt-4">
        Alles sind relativ statische Inhalte - außer einer möglichen
        Bildgalerie. Diese könnten durch einen Content-Autor in regelmäßigen
        Abständen oder nach Notwendigkeit gepflegt werden.
      </p>
    </Content>
  );
}
