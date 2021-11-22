import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <div className="container">
      <h1>Exercice 4</h1>
      <h3>Consignes :</h3>
      <p>
        <ul>
          <li>Recopier les exercices 1 et 2 ci-dessous</li>
          <li>Les adapter pour que les 2 exercices soient sur 2 colonnes différentes sur Desktop, et sur une seule colonne sur
      Mobile</li>
          <li>Adapter le formulaire pour qu&apos;il respecte les guidelines Bootstrap sur les formulaires</li>
        </ul>
      </p>
      <div className="row">
      <div className="col-sm-6">
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

      <div className="col-sm-6">
        <h1>Exercice 2</h1>
        <h3>Consignes :</h3>
        <p>
          <ul>
            <li>Mettre en forme l&apos;exercice 2</li>
            <li>Créer ci-dessous un formulaire d&apos;inscription contenant les champs : Prénom, nom, email, mot de passe, checkbox pour
        accepter un quelconque règlement et un bouton de validation.</li>
          </ul>
        </p>

        <form method="post">
          <div className="form-group">
          <div>
            <label htmlFor="firstname">Prénom</label>
            <input className="form-control" type="text" id="firstname" name="firstname" placeholder="prénom"/>
          </div>

          <div>
            <label htmlFor="lastname">Nom</label>
            <input className="form-control" type="text" id="lastname" name="lastname" placeholder="nom"/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input className="form-control" type="text" id="email" name="email" placeholder="john.doe@gmail.com"/>
          </div>

          <div>
            <label htmlFor="pwd">Mot de passe</label>
            <input className="form-control" type="text" id="pwd" name="pwd" placeholder="******"/>
          </div>

          <div>
            <label className="form-check-label" htmlFor="cgu">CGU</label>
            <input className="form-check-input" type="checkbox" id="cgu" name="cgu"/>
          </div>

          <div>
            <button className="btn btn-primary" type="submit">Envoyer</button>
          </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Exercise4
