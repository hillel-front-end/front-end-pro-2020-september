function Person({login, password, age}, uniqId) {
    this.login = login;
    this.password = password;
    this.age = age;
  
    this.id = uniqId;
}

module.exports = Person;