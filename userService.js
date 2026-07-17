const generateEmail = require("./emailGenerator");
const calculateExpiry = require("./subscription");
const { createMailbox } = require("./mailbox");

function createUser(plan, duration) {
  const email = generateEmail();
  const expiresAt = calculateExpiry(duration);

  const mailbox = createMailbox(email, plan, expiresAt);

  return {
    email,
    plan,
    expiresAt,
    mailbox
  };
}

module.exports = {
  createUser
};
