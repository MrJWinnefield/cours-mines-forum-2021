import {formatDistanceToNow} from 'date-fns'
import fr from 'date-fns/locale/fr'

interface Props {
    body: string
    author: string
    date: number
}

const Message = ({body, author, date}: Props) => {
    
    return(
        <div className="card my-3">
            <div className="card-body">
              <p className="card-text">{body}</p>
            </div>
            <div className="card-footer text-muted text-right">
                <div className="d-flex justify-content-between">
                    {/* <p>Par <span className="author">{author}</span>, {date}</p> */}
                    <p>Par <span className="author">{author}</span>, {formatDistanceToNow(date, {addSuffix: true, locale: fr})}</p>
                    <button type="submit">Aimer</button>
                </div>
            </div>
        </div>
    )
}

export default Message