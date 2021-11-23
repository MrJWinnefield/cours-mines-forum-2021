import type { NextPage } from 'next'
import Message from './Message'
import useSWR from 'swr' // npm install swr
import {formatDistanceToNow} from 'date-fns'
import fr from 'date-fns/locale/fr'

interface MessageApi {
    author: string
    content: string
    timestamp: number
}

const fetcher = async (url: string) => {
    let pageIndex = 0
    let messages: MessageApi[] = []
    let finished = false

    while (!finished) {
        const urlWhithPage = `${url}?page=${pageIndex}`
        const response = await fetch(urlWhithPage).then((response) => response.json())

        messages = messages.concat(response)

        pageIndex += 1
        finished = response.length === 0
    }

    // Return messages in reverse order
    return messages.reverse()
}

const MessagesList: NextPage = () => {

    const { data, error } = useSWR<MessageApi[]>('https://ensmn.herokuapp.com/messages', fetcher)

    if (error) {
        return <div>failed to load</div>
    }
    if (!data) {
        return <div>loading...</div>
    }

    return (
        <div className="container">
            {data.map(({author, content, timestamp}, i) => <Message key={i} body={content} author={author} date={timestamp} />)}
        </div>
    )
}

export default MessagesList