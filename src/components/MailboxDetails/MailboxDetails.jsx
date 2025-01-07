import { useParams } from 'react-router-dom'

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams()
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))

  if (!selectedBox) {
    return <h1>Mailbox Not Found!</h1>
  }

  return (
    <div>
      <h1>Mailbox {selectedBox._id}</h1>
      <p>Owner: {selectedBox.boxOwner}</p>
      <p>Size: {selectedBox.boxSize}</p>
    </div>
  )
}

export default MailboxDetails