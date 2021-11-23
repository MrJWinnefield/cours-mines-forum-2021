import type { NextPage } from 'next'
import Message from './Message'


const MessagesList: NextPage = () => {
    const messages = [
        {body: "Message1",
        author: "Luc",
        date: new Date()},

        {body: "Message2",
        author: "Luc",
        date: new Date()},
        
        {body: "Message3",
        author: "Luc",
        date: new Date()},
        
        {body: "Message4",
        author: "Luc",
        date: new Date()},
        
        {body: "Message5",
        author: "Luc",
        date: new Date()},
        
        {body: "Message6",
        author: "Luc",
        date: new Date()}
    ]
    return (
        <div className="container">
            {messages.map(({body, author, date}, i) => <Message key={i} body={body} author={author} date={date} />)}
        </div>
    )
}

export default MessagesList