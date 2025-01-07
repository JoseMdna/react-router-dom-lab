import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => (
  <div>
    {mailboxes.map((mailbox) => (
      <div key={mailbox._id} className="mail-box">
        <Link to={`/mailboxes/${mailbox._id}`}>Box {mailbox._id}</Link>
      </div>
    ))}
  </div>
)

export default MailboxList