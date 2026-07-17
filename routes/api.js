const database = require("../database");
const config = require("../config");

function getPlans() {
  return config.plans;
}

function getUsers() {
  return database.users;
}

module.exports = {
  getPlans,
  getUsers
};
