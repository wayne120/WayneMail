const generateId = require("./idGenerator");
const generateEmail = require("./emailGenerator");
const calculateExpiry = require("./subscription");
const { createMailbox } = require("./mailbox");

function createUser(plan, duration) {
  const id = generateId();
  const email = generateEmail();
  const expiresAt = calculateExpiry(duration);

  createMailbox(email, plan, expiresAt);

  return {
    id,
    email,
    plan,
    expiresAt
  };
}

module.exports = {
  createUser
};
