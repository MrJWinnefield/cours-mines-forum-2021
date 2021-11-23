import type { NextPage } from 'next'

const Form: NextPage = () => {

    return (
        <form>
            <div className="mb-3">
              <input className="form-control" type="text" id="pseudo" name="pseudo" placeholder="votre pseudo"/>
            </div>
            <div className="mb-3">
              <label htmlFor="pwd">Entrez votre message :</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
              <div className="mb-3">
                <button className="btn btn-primary" type="submit">Envoyer</button>
              </div>
        </form>
    )
}

export default Form