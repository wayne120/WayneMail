const mailboxes = [];

function createMailbox(email, plan, expiresAt) {
  const mailbox = {
    email,
    plan,
    expiresAt,
    inbox: []
  };

  mailboxes.push(mailbox);

  return mailbox;
}

function getMailbox(email) {
  return mailboxes.find(mailbox => mailbox.email === email);
}

module.exports = {
  createMailbox,
  getMailbox
};
