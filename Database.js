const database = {
  users: [],

  plans: {
    normal: {
      name: "Normal",
      price: 200,
      duration: 7
    },

    premium: {
      name: "Premium",
      price: 400,
      duration: 7
    },

    premiumPlus: {
      name: "Premium+",
      price: 500,
      duration: 7
    }
  },

  addUser(user) {
    this.users.push(user);
  },

  getUsers() {
    return this.users;
  }
};

module.exports = database;
