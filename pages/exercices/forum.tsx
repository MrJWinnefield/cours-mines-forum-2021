import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <div id="forum-wrapper" className="d-flex flex-column">
      <div id="messages-container" className="flex-grow-1">

      </div>
      <div id="new-message-container">
        <form method="post">
          <div className="form-group">
            <div className="row">
              <div className="col-sm-6">
                <div>
                  <input className="form-control" type="text" id="message" name="message" placeholder="entrez votre message"/>
                </div>
              </div>
              <div className="col-sm-6">
                  <input className="form-control" type="text" id="pseudo" name="pseudo" placeholder="votre pseudo"/>
                  <button className="btn btn-primary" type="submit">Envoyer</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Exercise4
