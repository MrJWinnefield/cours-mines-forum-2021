import type { NextPage } from 'next'
import MessagesList from '../../components/MessagesList'
import Form from '../../components/Form'
import Navbar from '../../components/Navbar'

const Forum: NextPage = () => {
  return (
    <div id="window" className="d-flex flex-row">
      <div id="navbar-wrapper">
        <Navbar />
      </div>

      <div id="forum-wrapper" className="d-flex flex-column">
        <div className="row">

          <div id="messages-container" className="flex-grow-1">
            <div className="container">
              <MessagesList />
            </div>
          </div>

          <div id="new-message-container">
            <div className="container py-3">
              <Form />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Forum