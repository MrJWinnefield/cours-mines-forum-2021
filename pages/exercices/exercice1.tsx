import type { NextPage } from 'next'

const Exercise1: NextPage = () => {
  return (
    <div>
      <h1>Exercice 1</h1>

      <h3>Consignes :</h3>

      <p>
        <ul>
          <li>Mettre en forme l&apos;exercice 1</li>
          <li>En-dessous, regrouper les noms de balises vues jusqu&apos;ici dans un tableau avec en-têtes ayant pour colonnes : Balise,
            Contenu. Dans la colonne contenu spécifier la ou les balises qu&apos;il est possible d&apos;insérer à l&apos;intérieur, ou &quot;texte&quot;
            (pour les titres par exemple).</li>
        </ul>
      </p>

      <table className="table">
        <tr>
          <th>Balise</th>
          <th>Contenu</th>
        </tr>
        <tr>
          <td>a</td>
          <td>texte</td>
        </tr>
        <tr>
          <td>div</td>
          <td>texte, autres balises</td>
        </tr>
        <tr>
          <td>ul</td>
          <td>li</td>
        </tr>
      </table>

    </div>
  )
}

export default Exercise1
