function calculateExpiry(days) {
  const expiry = new Date();

  expiry.setDate(expiry.getDate() + days);

  return expiry;
}

module.exports = calculateExpiry;
