import type { NextPage } from 'next'

const Exercise2: NextPage = () => {
  return (
    <div>
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
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input type="text" id="firstname" name="firstname" placeholder="prénom"/>
        </div>

        <div>
          <label htmlFor="lastname">Nom</label>
          <input type="text" id="lastname" name="lastname" placeholder="nom"/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="john.doe@gmail.com"/>
        </div>

        <div>
          <label htmlFor="pwd">Mot de passe</label>
          <input type="text" id="pwd" name="pwd" placeholder="******"/>
        </div>

        <div>
          <label htmlFor="cgu">CGU</label>
          <input type="checkbox" id="cgu" name="cgu"/>
        </div>

        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form>
      <div>
        <video src="video.mp4"></video>
      </div>
    </div>
  )
}

export default Exercise2
