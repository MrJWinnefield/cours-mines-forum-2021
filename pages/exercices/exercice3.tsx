import type { NextPage } from 'next'

const Exercise3: NextPage = () => {
  return (
    <div>
      <h1>Exercice 3</h1>
      <h3>Consignes :</h3>
      <p>
        <ul>
          <li>Mettre en forme l&apos;exercice 3</li>
          <li>Recopier le formulaire d&apos;inscription précédent ci-dessous</li>
          <li>Grâce au fichier style.css, mettre le texte des labels en bleu, agrandir la police dans les input texte, placer un
      bloc en position absolue à droite du champ adresse email avec un texte de votre choix en police 10px rouge.</li>
        </ul>
      </p>
      <form method="post">
        <div>
          <label className="label3" htmlFor="firstname">Prénom</label>
          <input className="input3" type="text" id="firstname" name="firstname" placeholder="prénom"/>
        </div>

        <div>
          <label className="label3" htmlFor="lastname">Nom</label>
          <input className="input3" type="text" id="lastname" name="lastname" placeholder="nom"/>
        </div>

        <div>
          <label className="label3" htmlFor="email">Email</label>
          <input className="input3" type="email" id="email" name="email" placeholder="john.doe@gmail.com"/>
        </div>

        <div id="mail-row">
          <p>Hello World</p>
        </div>

        <div>
          <label className="label3" htmlFor="pwd">Mot de passe</label>
          <input className="input3" type="pwd" id="pwd" name="pwd" placeholder="******"/>
        </div>

        <div>
          <label className="label3" htmlFor="cgu">CGU</label>
          <input className="input3" type="checkbox" id="cgu" name="cgu"/>
        </div>

        <div>
          <button className="btn btn-primary" type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  )
}

export default Exercise3
