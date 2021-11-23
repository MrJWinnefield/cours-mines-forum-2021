import { ChangeEvent, SyntheticEvent, useState} from "react";
import useSWR, { mutate } from 'swr'; // npm install swr
import {formatDistanceToNow} from 'date-fns'
import fr from 'date-fns/locale/fr'



const Form = () => {

    const [pseudo, setPseudo] = useState("")
    const [message, setMessage] = useState("")

    const handlePseudoChange = (event: ChangeEvent<HTMLInputElement>) => setPseudo(event.target.value)
    const handleMessageChange = (event: ChangeEvent<HTMLTestAreaElement>) => setMessage(event.target.value)

    const handleSubmit = async (event: SyntheticEvent) => {
      // Prevent browser to submit
      event.preventDefault()
      // Validate data
      if (pseudo.length === 0 || message.length === 0) {
        return
      }
      // Send data
      await fetch('https://ensmn.herokuapp.com/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: pseudo,
          message: message
        }) // body data type must match "Content-Type" header
      })
      // Refresh messages
      setMessage("")
      mutate('https://ensmn.herokuapp.com/messages')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input className="form-control" type="text" id="pseudo" name="pseudo" placeholder="votre pseudo" required onChange={handlePseudoChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="pwd">Entrez votre message :</label>
              <textarea className="form-control" id="message" rows={3} required onChange={handleMessageChange}></textarea>
            </div>
              <div className="mb-3">
                {/* <Message body={message} author={pseudo} date={(new Date()).toISOString()} /> */}
                <button className="btn btn-primary" type="submit">Envoyer</button>
              </div>
        </form>
    )
}

export default Form