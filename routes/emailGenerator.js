function generateEmail() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let username = "";

  for (let i = 0; i < 10; i++) {
    username += chars[Math.floor(Math.random() * chars.length)];
  }

  return `${username}@waynemail.com`;
}

module.exports = generateEmail;
